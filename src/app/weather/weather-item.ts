export class WeatherItem {
  // this defines how a weather item should be structured

  constructor(
    public cityName: string,
    public description: string,
    public temperature: number
    ) { }
}
