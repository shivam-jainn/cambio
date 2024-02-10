function StatsCard() {
    return (
        <div className="stats shadow w-1/2 h-40 ml-16">

            <div className="stat">
                <div className="stat-title">Total</div>
                <div className="stat-value text-primary">$89,400</div>
            </div>

            <div className="stat">
                <div className="stat-title">Last Bid</div>
                <div className="stat-value text-secondary">$87,950</div>
            </div>

            <div className="stat">
                <div className="stat-value">86%</div>
                <div className="stat-title">Chance of winning</div>
            </div>
        </div>
    )
}

export default StatsCard;