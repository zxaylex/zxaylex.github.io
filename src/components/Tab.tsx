function Tab(children: {name: string}) {
    return (
        <div className="tab">
            <p>{ children.name }</p>
        </div>
    )
}

export default Tab;