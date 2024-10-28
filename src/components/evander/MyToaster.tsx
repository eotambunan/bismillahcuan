import { useToast } from "@/hooks/use-toast"
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/components/ui/toast"

export function MyToaster() {
    const { toasts } = useToast()

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, ...props }) {
                return (
                    <Toast
                        className="border-4 border-[#ceaf59] bg-gradient-to-tr from-indigo-800 to-sky-700 text-yellow-500 font-bold p-4"
                        key={id}
                        {...props}>
                        <div className="grid gap-1">
                            {title && <ToastTitle>{title}</ToastTitle>}
                            {description && (
                                <ToastDescription className="text-lg">{description}</ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose className="rounded-full bg-[#ff000058]" />
                    </Toast>
                )
            })}
            <ToastViewport />
        </ToastProvider>
    )
}
