import { Controller } from '@nestjs/common'

@Controller('health')
export class HealthController {
    constructor() {}

    @Controller()
    getHealth(): { status: string } {
        return { status: 'ok' }
    }
}
