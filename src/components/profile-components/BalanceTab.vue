<template>
  <div class="tab-pane fade active show" id="balance">

    <div class="x-card  x-card--full-width">

      <div class="x-card__header">
        <h1 class="x-card__title">Баланс</h1>
      </div>

      <div class="x-card__body">
        <div v-if="loading" style="align-items: center; left: 55%; top: 45%; justify-content: center; position: absolute;">
          <div style="z-index: 9;">
            <swapping-squares-spinner
                :animation-duration="1500"
                :size="150"
                color="#0047ab"
            />
          </div>
        </div>
        <div v-if="!loading">
          <div class="row">
            <div class="col-12">
              <h1 class="text-warning">У вас ещё нет кошелька для хранения USDT!</h1>
              <button class="btn btn--main" type="button">Нажмите сюда, что-бы создать кошелек</button>
            </div>
          </div>
        </div>
      </div><!-- /.card__body -->

    </div><!-- /.card -->

  </div><!-- /.tab-pane -->

</template>

<script>
/* eslint-disable*/
import UserService from "@/services/user.service";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import { SwappingSquaresSpinner  } from 'epic-spinners'
import QRCodeVue3 from "qrcode-vue3";

export default {
  name: "BalanceTab",
  components: {
    SwappingSquaresSpinner,
    QRCodeVue3
  },
  data() {
    return{
      loadedUser: undefined,
      loading: false,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    copyWalletAddress(){
      let el = this.$refs.waddress;
      navigator.clipboard.writeText(el.innerHTML);
      createToast(el.innerHTML + " - successfully copied!", {
        type: 'success',
        position: 'top-right',
        showIcon: true,
      });
    },
    openWalletForUser(){
      this.loading = true;
      UserService.openWalletForUser(this.loadedUser.userId).then(
          (response) => {
            createToast("Кошелек успешно создан!", {
              type: 'success',
              position: 'top-right',
              showIcon: true,
            });
            this.loading = false;
            this.loadUser();
          },
          (error) => {
            createToast({
              title: 'Произошла ошибка',
              description: error.response.data,
            }, {
              type: 'danger',
              position: 'top-right',
              showIcon: true,
            })
            this.loading = false;
            console.log(error);
            this.loadUser();
          }
      );
    },
    loadUser(){
      this.loading = true
      if (!this.currentUser) {
        this.$router.push('/login');
      } else {
        UserService.getUserById(this.currentUser.userId).then(
            (response) => {
              this.loadedUser = response.data
              this.loading = false
            },
            (error) => {
              this.loading = false
              console.log(error)
            }
        );
      }
    }
  },
  mounted() {
    this.loadUser();
  }
}
</script>

<style scoped>
.wAddress {
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
}
</style>

