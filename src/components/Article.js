import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.defaultOpen,
            count: 0
        }
    }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState ({
            isOpen: nextProps.defoultOpen
        })
    }

    componentWillUpdate() {
        console.log('---', 'will update')
    }


    render() {
        const {article} = this.props
        const style = {width: '50%'}
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header">
                    <h2 onClick = {this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button onClick={this.handleClick} className="btn bth-primary btn-lg float-right">
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                </div>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
export default Article
