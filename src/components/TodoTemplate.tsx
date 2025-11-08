import type { ReactNode } from 'react';

export default function TodoTemplate({ children }: { children: ReactNode }) {
    return <div className="TodoTemplate">{children}</div>
}
