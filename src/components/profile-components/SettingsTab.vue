<template>
  <div class="tab-pane fade active show" id="settings">

    <div class="x-card  x-card--full-width">

      <div class="x-card__header">
        <h1 class="x-card__title">Настройки</h1>
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

        <div class="settings">
          <Form @submit="handleUpdate" :validation-schema="schema" class="form">

            <div class="form__group">
              <label class="label" for="email">E-mail</label>
              <Field name="email" v-slot="{ field }" v-model="user.email">
                <input class="field" v-bind="field" @input="update" type="email" :disabled="loading">
              </Field>
              <ErrorMessage name="email" class="error-feedback" />
            </div>

            <div class="form__group">
              <label class="label" for="name">Наименование и / или ФИО</label>
              <Field name="name" v-slot="{ field }" v-model="user.name">
                <input class="field" v-bind="field" @input="update" type="text" :disabled="loading">
              </Field>
              <ErrorMessage name="name" class="error-feedback" />
            </div>

            <div class="form__group">
              <label class="label" for="ruk">Руководитель </label>
              <Field name="ruk" v-slot="{ field }" v-model="user.ruk">
                <input class="field" v-bind="field" @input="update" type="text" :disabled="loading">
              </Field>
              <ErrorMessage name="ruk" class="error-feedback" />
            </div>

            <div class="form__group">
              <label class="label" for="contact">Контактное лицо </label>
              <Field name="contact" v-slot="{ field }" v-model="user.contact">
                <input class="field" v-bind="field" @input="update" type="text" :disabled="loading">
              </Field>
              <ErrorMessage name="contact" class="error-feedback" />
            </div>

            <div class="form__group">
              <label class="label" for="contactnumber">Контактный телефон</label>
              <Field name="contactnumber" v-slot="{ field }" v-model="user.contactnumber">
                <input class="field" v-bind="field" @input="update" type="text" :disabled="loading">
              </Field>
              <ErrorMessage name="contactnumber" class="error-feedback" />
            </div>

            <div class="form__group">
              <label class="label" for="website">Официальный сайт </label>
              <Field name="website" v-slot="{ field }" v-model="user.website">
                <input class="field" v-bind="field" @input="update" type="text" :disabled="loading">
              </Field>
              <ErrorMessage name="website" class="error-feedback" />
            </div>

            <div class="form__group">
              <label class="label" for="wallets">Привязанные банковские счета и цифровые кошельки</label>
              <Field name="wallets" v-slot="{ field }" v-model="user.wallets">
                <input class="field" v-bind="field" @input="update" type="text" :disabled="loading">
              </Field>
              <ErrorMessage name="wallets" class="error-feedback" />
            </div>

            <div class="form__group">
              <label class="label" for="notifications">Уведомления </label>
              <Field name="notifications" v-slot="{ field }" v-model="user.notifications">
                <input class="field" v-bind="field" @input="update" type="text" :disabled="loading">
              </Field>
              <ErrorMessage name="notifications" class="error-feedback" />
            </div>

            <div class="form__group">
              <label class="label" for="connected">Подключенные услуги </label>
              <Field name="connected" v-slot="{ field }" v-model="user.connected">
                <input class="field" v-bind="field" @input="update" type="text" :disabled="loading">
              </Field>
              <ErrorMessage name="connected" class="error-feedback" />
            </div>

            <div class="form__group">
              <label class="label" for="password">Изменение пароля</label>
              <Field name="password" v-slot="{ field }" v-model="user.password">
                <input class="field" v-bind="field" @input="update" type="text" :disabled="loading">
              </Field>
              <ErrorMessage name="password" class="error-feedback" />
            </div>

            <div class="form__group">
              <div :class="this.updated ? 'settings__save-btns' : 'settings__save-btns settings__save-btns--hidden'">
                <button class="btn  btn--main" type="submit">Сохранить</button>
                <button class="btn  btn--transparent" @click="reset">Отменить</button>
              </div>
            </div>

          </Form><!-- /.settings__form -->

        </div><!-- /.settings -->

      </div><!-- /.card__body -->

    </div><!-- /.card -->

  </div><!-- /.tab-pane -->

</template>

<script>
/* eslint-disable*/
import moment from 'moment/moment'
import {ErrorMessage, Field, Form} from "vee-validate";
import { SwappingSquaresSpinner  } from 'epic-spinners'
import * as yup from "yup";

export default {
  name: "SettingsTab",
  components: {
    Form,
    Field,
    ErrorMessage,
    SwappingSquaresSpinner,
  },
  data() {
    const schema = yup.object().shape({
      name: yup
          .string()
          .required("Name is required!")
          .min(2, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      ruk: yup
          .string()
          .required("Rukovoditel is required!")
          .min(2, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      contact: yup
          .string()
          .required("Contact is required!")
          .min(2, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      contactnumber: yup
          .string()
          .required("Number is required!")
          .min(2, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      website: yup
          .string()
          .required("Web is required!")
          .min(2, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      wallets: yup
          .string()
          .required("Wallets is required!")
          .min(2, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      notifications: yup
          .string()
          .required("notifications is required!")
          .max(50, "Must be maximum 50 characters!"),
      connected: yup
          .string()
          .required("connected is required!")
          .max(50, "Must be maximum 50 characters!"),
      password: yup
          .string()
          .required("password is required!")
          .max(50, "Must be maximum 50 characters!"),
      email: yup
          .string()
          .required("Email is required!")
          .email("Email is invalid!")
          .max(50, "Must be maximum 50 characters!"),
    });
    return {
      loading: false,
      updated: false,
      user: {
        name: "",
        ruk: "",
        contact: "",
        contactnumber: "",
        email: "",
        website: "",
        wallets: "",
        notifications: "",
        connected: "",
        password: "",
      },
      schema
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    update(){
      this.updated = true;
    },
  },
}
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.error-feedback {
  color: red;
}
</style>
