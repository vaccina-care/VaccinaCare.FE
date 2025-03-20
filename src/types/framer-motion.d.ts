declare module "framer-motion" {
    export interface AnimatePresenceProps {
        children?: React.ReactNode
        mode?: "sync" | "wait" | "popLayout"
        initial?: boolean
        onExitComplete?: () => void
        exitBeforeEnter?: boolean
        presenceAffectsLayout?: boolean
    }

    export const AnimatePresence: React.FC<AnimatePresenceProps>
}

