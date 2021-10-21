import router from "../router";
import { Login } from "./users";
import { NotificationProgrammatic } from "@ouruga-ui/oruga-next/dist/esm/notification";

const session = {
    user: null,
    messages: [],          // {text: string, type: string }
    toRoute: '/feed',
    Login(handle, password){

        try {
            const response = Login(handle, password);

        this.user = response.user;

        router.push(this.toRoute);

        } catch (error) {
            this.messages.push({ text: error.msg, type: 'warning' })
            NotificationProgrammatic.open({
                duration: 5000,
                message: error.msg,
                variant: 'danger',
                type: 'danger',
                closeable: true,
            })
        }

        

    }
};

export default session;

//export function