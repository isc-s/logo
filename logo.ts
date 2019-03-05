const SVG_NS = 'http://www.w3.org/2000/svg'
const COLOR_DARK = '#41423f'
const COLOR_LIGHT = '#ffec51'
const COLOR_FORE = '#ffffff'
const TOP_BAR_SIZE = 10
const GEAR = {
    innerRadius: 0.25,
    outerRadius: 0.675,
    toothRatio: 0.6,
    toothOuterRatio: 0.425,
    toothGapRadius: 0.236,
    toothGapInvert: false,
}
const WIDTH = 450
const HEIGHT = 120
const MINIFIED_CSS_FONT = '@font-face{font-family:"Rajdhani";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABIsAA4AAAAAHyAAATN1AAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABRAAAAEwAAABgWpCF/GNtYXAAAAGQAAAAnAAAAdIxNTw3Y3Z0IAAAAiwAAAA/AAAAZB0GC+ZmcGdtAAACbAAABZEAAAtwjJKQWGdhc3AAAAgAAAAACAAAAAgAAAAQZ2x5ZgAACAgAAAYyAAAKMCOyQGtoZWFkAAAOPAAAADYAAAA2BneO8WhoZWEAAA50AAAAIAAAACQF5QEqaG10eAAADpQAAABQAAAAUCaZBJhsb2NhAAAO5AAAACoAAAAqGTQWZG1heHAAAA8QAAAAIAAAACABjwv5bmFtZQAADzAAAAJdAAAER0goYTxwb3N0AAARkAAAABQAAAAg/7gARnByZXAAABGkAAAAhgAAAJGiw2oueJxjYGH8xhTBwMrAwNQFpBkYvCE0YxyDEaMRUJQBCbALIHE8Q9z8GQ4wKDBEMi/6t4yBgXkRY5QCA8NkkBzjP6ZmIKXAwAEAGOcMYnicxY7JDgEBEETfmMHYt6uDk7j4CLEnQmI5+EoigpvlIsLdT/ANpS1HibmppKq7OtXpBlzeLOLwxMWc8/Iec6sVStb5pmWq1KjToEmLNh269OgzYMiIMROmkm0ETOqmu646aaeD6VFn0422WmtvnGmphVafrwLBifzOJF9aeBvvSyCOG0mn8jm7myCchVjIj9o8E/yPf+IBsOEys3icY2DACiIZIpk0GAIZApnLmPKZ8hnU/zMzv/jHA+QVAHkMEB5DIhCGMoQyNTMwMO1n/AcUzwGJo/MBGo0XAQB4nK1WaXfTRhQdecmKk5QstKiFEROnwRqZsIUAJgTJC5AuztZK0EWKnXTf+MRv8K95Mu059Bs/rfeNFxJI2nM4zcnRu/PmaubtMgktSeyFtUjKzZeisLVJIztPQrph03IUH8rOXkiZYvL3mBgTrZbatx2HREQiUNWusEQQ+x5ZmmR86FFGy7akV03KLT3pLlsTQa1V234aOsqxO6GkZjN0aCOyJa0xWosimfZISZuWoeqvJK3w/gozXzVDCSM6iaSJZhhDI3lvgtEqo9XYjqMosslyo0iRaIYHUeRRVkuckysmMCgfNEPKK59GlA/zI7Jij3JawS7ZTvP7vuSd3uX8pExca1G25EAfyI7s4Ox0JV+EW1th3LST7ShUEXY3dkJs2exU/2aP8ppGA7crMr3QjGCpfIUQKz+hzP4hWS3cT/mSR6NaspGTQetlTuxLPoE24ogpcdUYOaa7o5MiqPklZxjscX08+BO9UywXJgTwOJa1jko4ESZSwuZokrRh5MBKyhZVUu1dMXnK67SIt4T92rWjL53RxqHu5ES2Fjq2cqKS41FBp5lMjdpJ1aMpDaKUdCZ4zK8DKD+iAq+2sSpg5dE0jpkxIZGIQAv30lQQy04saQpB82hGb+6Gaa5djRapcKCee/Se3twKN3d6StuBftboz+pUTAd7YTo9HZCV+DTtcpGidP30DD8KeJC1gExki80w5eDBW7+D9PK1JUfhtQG2e/v8CmqfNRE8acD+BrTHU3VKAlMhZhWiFZBY71qWZXI1q0UqMrXdkKaVL2s0iaKcUKg3X8a4/q+ZGUtMCd/vxOnZEZeeufYlhGkOvs26Hs3r1GK5gDizPKfTLMv3dZpj+YFO8yzP63SEpa3TUZYf6nSM5Uc6HWd5QQsquO9gyEUYcgEHSBjC0oEhLC/BEJYKhrBchCEsizCE5RIMYfkxDGG5DENYXtayYuqppHHtTCwDJCEOTMzRI5e5qFxNJZdKaBeNSm3IU8KtkjXFs+pfGagXj7xhDqwF0iWy5leMc+WjUTm+dUXLm8bOFXCs2tuHo31OvJT1YuFPwX/VdbWWXrHm4clV+A1DT7YTVZuseXRNl89VPLr+X1RUWAv0G0iFWCjKsmxwZyKEjzqdhmqglUPMbMw8tOt1y5qfw/03MUIWUP34NxQaD9yDTllJWengrNXX27LcO4NyOBMsSTE388ZW+CIjs9J+kVnKno98HnBjGJXKsFUdrRW82ScxD5neJM8EcVtRNkja2M4EiQ0c84B5850EJmHqqjpyp3BDHX5BmFtw3gmXqN4oy6F7Efs8Cin/1qk4kT0qGiPwbPZG2Ou7kPJbHAMJTX6pHwNVQWjWjJrG0DRS1lWDL+Ns3TYhYwf6ERW7YVlW8OFji/tKybYMQj5SxOrR0U9rL1EnVW4/M4rL907fgmCQmpi/vW+6OEjlXa1kmaNWx9StROXUtebQeJWhunlUfe84+0TOuqab7omH3te06nZwMRcLrH2bg7SUyQV1Y1hhg+hycSmUehlN0jvuAYYFBvQ7lGLj/6o+Np/nSkVhdBzJtxP1bfQ5GAP/A/bfUf0A9P0YulyFy/O95sSnG304W6ar6MXaKfo6Zq01N0vXgBuabkA85KjVEFdZx3dqEKdHmsuRHgI+1l0hHgBsAlgMPtFdy2g+BTCaz5jjA3zOHAZN5jDYYg6DbeasA+wwh8EucxjsMYfBF8zZAPiSOQxC5jCImMPgCXMCgKfMYfAVcxh8zRwG3zDnPsC3zGEQM4dBwhwG+5puDcPc4gXdBWobVAE6MPWExT0sDjWtDdnf8cKwvzeI2T8YxNQfNd0eUn/ihaH+bBBTfzGIqb9qujOk/sYLQ/3dIKb+YRBTn+kX47nM4JeR79LYAWUXm8/5e+L9A+oPQLsAAAAAAQAB//8AD3icjVbNbxNHFJ+Znd21d53gWX8ldh2IN7YBx01iOx9NCN4KQrzLRxM7ELtSRRCNqjalVIVLVRUkOPTEFZWqH6dKtFIDKuJEK8GFfyCVeoGqB4ooBRVVKlKR4vbNztpJWqiQVs874/G8937v937PCKMDCKFL5CzSUcgKIoxTFdgwkV0sECWaC7FwDqeGWWkCFy6xMoOHvLf6BWPkCINzCKNJMHfh9zvQa3sv6zN1K4Ukiqi0CPsYHUWUkjoiBK7FWG4gWTZlO2H1iUPoGJyiCC899VjD8u8slSZLBUWJ50aHeQxJHI7Cx8gkLr1IwYzAIgqbECSsMvChwCrWQ8EqsMpMMoulc1O5zFDlUGWoZr/l1Nydci79cnJqz3hfzX7Xnvs0zpixPZ3tj21J6+F4ZWy7XavZUcY6cunswOZ8UNXCvbsGs7DLcy6D+RVyzqI39172Q84mIpIskUUkUyofRZKE6wJKSlFDwS6gCSstTsnH4Jgk06Wnn2tYIYLMLcl4LMw6NRVlSVZVwrm0mcpAHTYmDDbCwrAF7wIdBR846czOOiftqlFmlfkKPKxsVFHVxvv5F4OG0e84zWuO028Yg3aV57MVx3AQvwEc2Gy9AGuE53jx6gTDYh9BPhnpRJcgipCZarv6+yZjNxmOGXBRv8HvscE0AZcEylp9XRqBS6YJ5glKlLjJERQNBTvgvgRJyHDfqOmRKxYqup8Rl3BZyWThj3cyNhZU/qAMXkaC2iOKOO305n78DWNAwiBebtYYIq7fBy6Hu9FWgBljj0wUcpHqgLMpgevuKOsUqbiuiwVwLRBUXd9ReOOkuXquUjmnH2GPOQkes4MOnnK05g59N3ifdZpXADSMdoPP++CzG/VZvYSnB2WEgjbAu4m9RP0K6ibd3BsuFrzbM8OtRMHCO75QNmr2cbsKvVWp2uRssLnVrkK5fmSsmXccvMI4tp1gvgR/Me5PwhtSdIEFtuiQXYzE1oAVLCn2FgRjwOdfZUM7ZRj4hGGc0gHPkMaKDB5t9SFvaIHlI/ATRxk0YY11YIniaRWaVIJ+XYDG9ChLFFHRZIKzNZFJZmKRUBACiJO4b31lOVvVSCwK/gewmYJVqFgQ3IX3C6Ap9+3a4eN6184udWkxoJ92nNO6W+maPXeih94Ps7vaLYan7TlHW9F4jHEwGsQYRl1owOrvwhSIhkSIh0V0cotvsaghgAmTsCLiGg2NuIzjIWUgJlUJSUXp7UonXZZDr4fpMt007VdJ5laGnq9fbbixcL6p2pkzjJjN69gS2sex4trJUK/VIxqZENSQWiVx/TLCKO/f3tT6wkPq+PPmd1xQA/eY5+J3zSgx715e6yTKW9t5VqCWC3C1B73cut+VCO4jSZJKG/N2ucEKT2tQ43HGfgoEbhjGjYBwCqX/XmcFQ3vA2jl9Db5NVLKGuG95g28gAKorrQA8leIhmMRU22k+KwQv8U+a1yEUKxi844USuBNsR/MVZ6T2rQ6Wx8OF5TeX92krFQnAzFgTlVYYbBPoJBCfCp2cxFJGVLjoVjqqSpEw7rHYNepTZzrUD5T3lc4Zn0qvIXYbn/VprPkQh5jma354m3F+lb3e1kHJeAUwdkVENBupy5gQk9idAd7kgURnQoiK8i9Ria1TbN779+Zte76yLOTZqVZdXeFKfLClza60eDX4061Bv7UN4pERkRckN2eqkGdi3245gbQQaiGoG/oNKLeiwRSER1vxaPBE0564JGermrbqzXaOw88QRx69I2Y7n2AKn3MKjDBFXtg4wepqa9JlxDnl2P8fbFgRgrZl1g27PMn7nmfYiZ3WyJta4uiB4RL6SgUefZaxi5G1qddnGFvE1HuV0ytyEYAmqAjVLEJ+PjSBzlsawwodxwSRaTHVB4D8ikwXEVZUBas8GRUpKhdBjw9+lw8+jbiESFiD4heQ93P+pGEldT9BY8OFwXyOA9Ed9U/oEzJFPuLTBaFGs+5/GoCE/+EZzfznb4+o7GYYMe5WLKq4WqvcGh1TPxo/M2VXS4Vt806PO2J2Bfb0D//C2GdXqKTMhP1DsUPFz6S9L9mHZuypwj46bEUqszN21jDSlUokPzRpFNkPVAuM7wFK/AOZQ3RxAAAAAQAAAAEzdeD+mSBfDzz1AAsD6AAAAADP5gfzAAAAANUyECEADgAAAjMCgwAAAAgAAgAAAAAAAHicY2BkYGBe9G8ZAwNTEgMfAy+TMQNQBAWIAABVBgMUAlgAeAD9AE4CJAA9AhwAPwE4ACgCRwBJAisASQItAEQBsgAOAh4ASQIkABoBwgBJAO4AAAHGAEkB4ABJAfwAEgIoAD8CPgBJAh8APwJiADMAAAAAACAAmgECASYBYgGcAdQCCAJaAp4CygLKAwgDUAOKA8oEDgR+BRgAAAABAAAAFAA9AAIAAAAAAAIAOgBKAHMAAADLC3AAAAAAeJyNUsFu2kAQHQNJ1EvUHFv1MOIUVHnBEBISX6IkAkVKRQQol54csPEmxmvZC4QfqPo7/Yn+QL+gf9BP6PPaRG1aqQV5/WbmzZuZHRPRa/pKFhW/SzwFtugAVoErtEeTElfpHX0scQ2cdYl36Ik+l3iXDqytzj69tQ6QZdVewfpkvS+xRXXrS4krtG99K3GVetb3EteoXnlT4h36UXFLvEv16lZnn46qHy5VsknlPNR8OG1wu+Uc8XU8k17Mk03ic18t41m64UMZB+pcmohGICj8YqoWjZH3MAu9WPLYX8gLFc1G/nwZeakjIOdeT/pDd0uxnykvc+78NJMq5iLpdgzQckOlpype5Vic9NyF9+grHYhI3rdFVxw7p52Wy1oH3lKrUMaYYeUIp8F2xCdsp9zusT3gbovtJ3Y6bF9x5OmY7YBn/spje82DPzoLtU7Oms1smspEZyKTkVDpvDns32CpihLaUEqS5hSSJqZDmlID7za1yKEjoGuKaQaGhzdj+Rvk+EB9ZC9NLIUvz5SwAnjPDdrm6DIj+I0vUEfRArVGYD3AGxq2hNIY7AXQBRgRIiPYc+RGYKToSpTduehtgj6GQC9V7L+o/KvOHeyUMniUmfXXSrdgF54WrBAMbSaIafXsF3RCPUQXqPAIrZwTwBtB8R5Kgrp4jsE+pY7RYTByjofpNPihubliDyuj6pht2NBgqOcoNdvpGTzA2YVSjp9MHx2Dr3Dmt6XNHDYqMObzoekZe41z8B93Fpr+EjqjJv4ZJs6/lQS+DL3lNxXhreCdIz7ELm5+AgzPzYoAAAB4nGNgZgCD/1sZjBgwgQgALNYB/nicY/DewWAUFLGRkbEvcgPjTg4GDobkgo0MrE6bdSWZGLRArK0KHHzsTBwQthabOCuYze60m8OB+QADEwMnkMfptJvBAQjBPGYGl40qjB2BERscOiI2Mqe4bFQD8XZxNDAwsjh0JIdEgJREAsFWJQ4BdiYerR2M/1s3sPRuZGJwAQDm9iThAAA=) format("woff"); font-weight:600;font-style:normal;}'
const MINIFIED_CSS_ANIMATION = '@keyframes g{0%{transform:none}100%{transform:rotate(360deg)}}.l{animation:12s linear reverse infinite g}.r{animation:9s linear infinite g}'

document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
    const wrapper = document.getElementById('logo_wrapper')
    new Logo(wrapper, true)
    new Logo(wrapper, false)
}

function setAttributes<T extends Element>(element: T, attributes: { [key: string]: any }): T {
    for (let key in attributes) {
        element.setAttribute(key, '' + attributes[key])
    }
    return element
}

class Logo {
    private svg: SVGElement
    private width: number
    private height: number

    constructor(wrapper: HTMLElement, private fullLogo: boolean) {
        if (this.fullLogo) {
            this.width = WIDTH
            this.height = HEIGHT
        }
        else {
            this.width = HEIGHT
            this.height = HEIGHT
        }

        this.svg = document.createElementNS(SVG_NS, 'svg')
        setAttributes(this.svg, {
            'xmlns': SVG_NS,
            'version': '1.1',
            'viewBox': `0 0 ${this.width} ${this.height}`,
            'width': this.width,
            'height': this.height,
        })

        wrapper.appendChild(this.svg)
        
        this.createStylesheet()
        this.createGears()
        if (this.fullLogo) {
            this.createBackground()
            this.createText()
        }

        this.render()
    }

    private createStylesheet() {
        const style = document.createElementNS(SVG_NS, 'style')
        const CSS = this.fullLogo
            ? MINIFIED_CSS_FONT + MINIFIED_CSS_ANIMATION
            : MINIFIED_CSS_ANIMATION
        style.appendChild(document.createTextNode(CSS))
        this.svg.appendChild(style)
    }

    private createBackground() {
        [0, 1, 2, 3].map((i) => {
            const rect = document.createElementNS(SVG_NS, 'rect')
            setAttributes(rect, {
                'width': i % 2 == 0 ? 180 : 270,
                'height': i < 2 ? TOP_BAR_SIZE : (75 - TOP_BAR_SIZE),
                'fill': (i == 0 || i == 3) ? COLOR_LIGHT : COLOR_DARK,
            })
            if (i % 2 === 1) {
                rect.setAttribute('x', '180')
            }
            if (i >= 2) {
                rect.setAttribute('y', '' + TOP_BAR_SIZE)
            }
            this.svg.appendChild(rect)
        })
    }

    private createText() {
        const createTextLine = (size: number, x: number, y: number, color: string, content: string) => {
            const elem = document.createElementNS(SVG_NS, 'text')
            elem.appendChild(document.createTextNode(content))
            setAttributes(elem, {
                'font-family': 'Rajdhani',
                'font-weight': '600',
                'font-size': size,
                'x': x,
                'y': y,
                'fill': color,
            })
            this.svg.appendChild(elem)
        }

        createTextLine(70, 12.25, 70 - TOP_BAR_SIZE / 2, COLOR_FORE, 'ISC-S')
        createTextLine(24, 190, 45, COLOR_DARK, 'INDUSTRIAL SAFETY')
        createTextLine(24, 190, 65, COLOR_DARK, 'COACHING & CONSULTING')
    }

    private createGears() {
        const gearRatio = 8/6
        const additionalRotation = Math.PI * 0.035

        ;[0, 1].map((i) => {
            const group = document.createElementNS(SVG_NS, 'g')
            const rotation = additionalRotation + (
                (!this.fullLogo && i === 0)
                ? 0.589
                : 0
                )
            const path = i == 0
                ? this.createGearPath(8, 40 - 1.5, Math.PI * 0.15 + rotation, true)
                : this.createGearPath(6, 30, Math.PI * 0.3 - rotation * gearRatio, false)
            const elem = document.createElementNS(SVG_NS, 'path')

            elem.setAttribute('d', path)
            let x: number
            if (i === 0) {
                setAttributes(elem, {
                    'class': 'l',
                    'fill': COLOR_LIGHT,
                    'stroke': COLOR_DARK,
                    'stroke-width': 1.5,
                })
                x = this.fullLogo ? 145 : 76
            } else {
                setAttributes(elem, {
                    'class': 'r',
                    'fill': COLOR_DARK,
                })
                x = this.fullLogo ? 205 : (120 - 45 + 60)
            }

            let y = this.fullLogo ? 75 : 77
            if (i === 1 && !this.fullLogo) {
                const angle = 135 * Math.PI / 180
                x = 76 + Math.cos(-angle) * 60
                y = 77 + Math.sin(-angle) * 60
            }

            group.appendChild(elem)
            group.setAttribute('transform', `matrix(1,0,0,1,${x},${y})`)
            this.svg.appendChild(group)
        })
    }

    private createGearPath(toothCount: number, radius: number, pathRotation: number, stroked: boolean): string {
        const sectionAngle = 2 * Math.PI / toothCount
        const toothAngle = sectionAngle * GEAR.toothRatio
        const arcAngle = sectionAngle - toothAngle
        const startAngle = -toothAngle / 2 + pathRotation

        function point(angle: number, radiusRatio: number): [number, number] {
            return [
                Math.cos(angle) * radius * radiusRatio,
                Math.sin(angle) * radius * radiusRatio,
            ]
        }

        function coordToStr(coord: number): string {
            let coordStr = coord.toFixed(3)
            const pointIdx = coordStr.indexOf('.')
            if (pointIdx === -1) return coordStr
            while (coordStr.endsWith('0')) {
                coordStr = coordStr.substr(0, coordStr.length - 1)
            }
            if (coordStr.length === pointIdx + 1) {
                coordStr = coordStr.substr(0, pointIdx)
            }
            return coordStr
        }

        function pointStr(angle: number, radiusRatio: number): string {
            const coords = point(angle, radiusRatio).map(coordToStr)
            return `${coords[0]} ${coords[1]}`
        }

        let path = []
        for (let section = 0; section < toothCount; ++section) {
            const toothStart = startAngle + sectionAngle * section
            const toothEnd = toothStart + toothAngle
            
            path.push(`L${pointStr(toothStart + (1 - GEAR.toothOuterRatio) * 0.5 * toothAngle, 1)}`)
            path.push(`L${pointStr(toothEnd - (1 - GEAR.toothOuterRatio) * 0.5 * toothAngle, 1)}`)
            path.push(`L${pointStr(toothEnd, GEAR.outerRadius)}`)

            const arcEndAngle = toothEnd + arcAngle
            path.push(`A${coordToStr(radius * GEAR.toothGapRadius)} ${coordToStr(radius * GEAR.toothGapRadius)}, 0, 0, ${GEAR.toothGapInvert ? '1' : '0'}, ${pointStr(arcEndAngle, GEAR.outerRadius)}`)
        }

        const startPoint = 'M' + path[0].substr(1)
        path.splice(0, 1, startPoint)
        path.push('Z')

        path.push(`M${coordToStr(radius * GEAR.innerRadius)} 0`)
        path.push(`A${coordToStr(radius * GEAR.innerRadius)} ${coordToStr(radius * GEAR.innerRadius)}, 0, 0, 0, ${coordToStr(-radius * GEAR.innerRadius)} 0`)
        path.push(`A${coordToStr(radius * GEAR.innerRadius)} ${coordToStr(radius * GEAR.innerRadius)}, 0, 0, 0, ${coordToStr(radius * GEAR.innerRadius)} 0`)

        return path.join(' ')
    }

    private render() {
        const blob = new Blob([this.svg.outerHTML], {
            type: 'image/svg+xml'
        })
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)
        this.svg.replaceWith(img)

        img.onload = () => {
            for (const scale of [1, 2, 4]) {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')
                canvas.width = this.width * scale
                canvas.height = this.height * scale
                ctx.drawImage(img, 0, 0, this.width * scale, this.height * scale)
                img.parentElement.appendChild(canvas)
            }
        }
    }
}
