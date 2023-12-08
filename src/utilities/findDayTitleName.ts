import { Title } from '../interfaces'
import titles from '../data/titles'

function findDayTitleName(day: number): string {
    const foundTitles: Title[] = titles.filter((title: Title): boolean => {
        return title.day === day
    })
    const dayTitle: Title = foundTitles[0]
    const dayTitleName: string = dayTitle.name

    return dayTitleName
}

export default findDayTitleName
