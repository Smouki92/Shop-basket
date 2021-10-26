
export interface SumProps {
    value: number
}

export const Sum: React.FC<SumProps> = ({ value }) => {
    return (
        <div className="mt-5">
            <h3>Сумма к оплате: {value} грн</h3>
        </div>
    )
}

