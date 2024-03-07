import { inline } from "./inline.js"
import padrao from "./inline.js"
import { group, a, b, c } from "./non-inline.js"
import exportDefault from "./non-inline.js"

padrao()
inline()

group()
a()
b()
c()
exportDefault()
