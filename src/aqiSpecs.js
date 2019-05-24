export const aqiSpecs = {
    misebig: { // 미세빅 표준
        level: 6,
        color: [ 'green', 'yellow', 'orange', 'red', 'purple', 'maroon', 'grey'],
        name: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Out of Bounds' ],
        pm25: [ 12, 25.4, 55.4, 150.4, 250.4, 350.4 ],
        //pm25: [ 12.0, 35.4, 55.4, 150.4, 250.4, 350.4 ], // US AQI
        pm10: [ 30, 50, 150, 354, 424, 504 ],
        //pm10: [ 54, 155, 254, 354, 424, 504 ], // US AQI
        no2: [ 0.03, 0.06, 0.2, 0.649, 1.249, 1.649 ],
        o3: [ 0.03, 0.09, 0.15, 0.204, 0.404, 0.504 ], // 0.604
        so2: [ 0.02, 0.050, 0.15, 0.304, 0.604, 0.804 ], // 1.004
        co: [ 2, 9.0, 12.4, 15.0, 30.4, 40.4 ],
        indexBp: [ 50, 100, 150, 200, 300, 400, 500 ],
        startBp: [ 0,  101, 151, 201, 301, 401,],
        pm25Data: {
            concEndPoints: [ 12, 25.4, 55.4, 150.4, 250.4, 350.4 ],
            lastConcStart: 351,
            lastConcEnd: 500,
            lastAqiStart: 401,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        pm10Data: {
            concEndPoints: [ 30, 50, 150, 354, 424, 504 ],
            lastConcStart: 505,
            lastConcEnd: 604,
            lastAqiStart: 401,
            lastAqiEnd: 500,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        no2Data: {
            concEndPoints: [ 0.03, 0.06, 0.2, 0.649, 1.249, 1.649 ],
            lastConcStart: 1.650,
            lastConcEnd: 2.049,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        o3Data: {
            concEndPoints: [ 0.03, 0.09, 0.15, 0.204, 0.404, 0.504 ],
            lastConcStart: 0.505,
            lastConcEnd: 0.604,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        so2Data: {
            concEndPoints: [ 0.02, 0.050, 0.15, 0.304, 0.604, 0.804 ],
            lastConcStart: 0.805,
            lastConcEnd: 1.004,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
        coData: {
            concEndPoints: [ 2, 9.0, 12.4, 15.0, 30.4, 40.4 ],
            lastConcStart: 40.5,
            lastConcEnd: 50.4,
            lastAqiStart: 400.5,
            lastAqiEnd: 500.4,
            get lastConcIntvl () {
                return this.lastConcEnd - this.lastConcStart;
            },
            get lastAqiIntvl () {
                return this.lastAqiEnd - this.lastAqiStart;
            },
            get slope() {
                return this.lastAqiIntvl/this.lastConcIntvl;
            }, 
            get intercept() {
                return this.lastAqiStart - this.lastConcStart*this.slope;
            },
        },
    },
    us: {
        level: 7,
        color: [ 'green', 'yellow', 'orange', 'red', 'purple', 'maroon', 'grey'],
        name: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Out of Bounds' ],
        pm25: [ 12.0, 35.4, 55.4, 150.4, 250.4, 500.4 ],
        pm10: [ 54, 154, 254, 354, 424, 604, 2105 ],
        //o3: [ 54, 70, 85, 105, 200, -1, -2 ], // ppm 2018.6.3까지 사용했던 잘못된 오존 breakpoint
        o3: [ 62.5, 101.5, 152.5, 205, 405, 605, 1000 ], // ppm. http://aqicn.org/faq/2016-08-10/ozone-aqi-scale-update/
        o31h: [ -1, -1, 164, 204, 404, 604 ],
        no2: [ 53, 100, 360, 649, 1249, 2049 ],
        co: [ 4.4, 9.4, 12.4, 15.4, 30.4, 50.4 ],
        so2: [ 35, 75, 185, 304, 604, 1004 ],
        indexBp: [ 50, 100, 150, 200, 300, 500, 2000 ]
    },
    kr: {
        level: 7,
        color: [ 'green', 'yellow', 'orange', 'red', 'purple', 'maroon', 'grey'],
        name: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Out of Bounds' ],
        pm25: [ 12.0, 35.4, 55.4, 150.4, 250.4, 500.4 ],
        pm10: [ 54, 154, 254, 354, 424, 604, 2105 ],
        //o3: [ 54, 70, 85, 105, 200, -1, -2 ], // ppm 2018.6.3까지 사용했던 잘못된 오존 breakpoint
        o3: [ 62.5, 101.5, 152.5, 205, 405, 605, 1000 ], // ppm. http://aqicn.org/faq/2016-08-10/ozone-aqi-scale-update/
        o31h: [ -1, -1, 164, 204, 404, 604 ],
        no2: [ 53, 100, 360, 649, 1249, 2049 ],
        co: [ 4.4, 9.4, 12.4, 15.4, 30.4, 50.4 ],
        so2: [ 35, 75, 185, 304, 604, 1004 ],
        indexBp: [ 50, 100, 150, 200, 300, 500, 2000 ]
    }
}

// O3: 8시간 평균이 1~5 단계까지, 1시간 평균은 125ppb 이상일 때 3~6단계까지 존재함
// PM2.5와 PM10은 하루 평균
// CO: 8시간 평균
// SO2: 1~4단계는 1시간 평균, 5~6단계는 24시간 평균
// NO2: 1시간 평균
export const misebigAqiSpec = { // 미세빅 표준
    level: 6,
    color: [ 'green', 'yellow', 'orange', 'red', 'purple', 'maroon', 'grey'],
    name: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous', 'Out of Bounds' ],
    pm25: [ 12, 25.4, 55.4, 150.4, 250.4, 350.4 ],
    //pm25: [ 12.0, 35.4, 55.4, 150.4, 250.4, 350.4 ], // US AQI
    pm10: [ 30, 50, 150, 354, 424, 504 ],
    //pm10: [ 54, 155, 254, 354, 424, 504 ], // US AQI
    no2: [ 0.03, 0.06, 0.2, 0.649, 1.249, 1.649 ],
    o3: [ 0.03, 0.09, 0.15, 0.204, 0.404, 0.504 ],
    so2: [ 0.02, 0.050, 0.15, 0.304, 0.604, 0.804 ],
    co: [ 2, 9.0, 12.4, 15.0, 30.4, 40.4 ],
    indexBp: [ 50, 100, 150, 200, 300, 400 ]
};