import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import Widget from '../Widget';
import './index.styl';
import GaugeChart from './gauge.jsx';

class Workspace extends Component {
    render() {
        const styles = {
            widgetContent: {
                position: 'absolute',
                top: 34,
                left: 0,
                right: 0,
                bottom: 0,
                padding: 10
            }
        };
        const layout = [
            { i: 'pie-chart', x: 0, y: 0, w: 4, h: 4, minW: 2, maxW: 8 },
            { i: 'line-chart', x: 4, y: 0, w: 6, h: 10, minW: 2, maxW: 8 },
            { i: 'bar-chart', x: 0, y: 2, w: 4, h: 6, minW: 2, maxW: 8 }
        ];

        return (
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
            >
                <Widget key="pie-chart">
                    <Widget.Header>
                        <Widget.Title>Pie Chart</Widget.Title>
                        <Widget.Controls>
                            <Widget.Button type="edit" />
                            <Widget.Button type="toggle" />
                            <Widget.Button type="fullscreen" />
                            <Widget.Button type="delete" />
                        </Widget.Controls>
                    </Widget.Header>
                    <Widget.Content style={styles.widgetContent}>
                    </Widget.Content>
                </Widget>
                <Widget key="line-chart">
                    <Widget.Header>
                        <Widget.Title>Gauge Chart</Widget.Title>
                        <Widget.Controls>
                            <Widget.Button type="edit" />
                            <Widget.Button type="toggle" />
                            <Widget.Button type="fullscreen" />
                            <Widget.Button type="delete" />
                        </Widget.Controls>
                    </Widget.Header>
                    <Widget.Content style={styles.widgetContent}>
                        <GaugeChart />
                    </Widget.Content>
                </Widget>
                <Widget key="bar-chart">
                    <Widget.Header>
                        <Widget.Title>Bar Chart</Widget.Title>
                        <Widget.Controls>
                            <Widget.Button type="edit" />
                            <Widget.Button type="toggle" />
                            <Widget.Button type="fullscreen" />
                            <Widget.Button type="delete" />
                        </Widget.Controls>
                    </Widget.Header>
                    <Widget.Content style={styles.widgetContent}>
                        Bar Chart
                    </Widget.Content>
                </Widget>
            </GridLayout>
        );
    }
}

export default Workspace;
