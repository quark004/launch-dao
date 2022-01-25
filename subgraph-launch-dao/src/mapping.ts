import {
  DAOLaunched
} from "../generated/LaunchTokenFactory/LaunchTokenFactory"
import { DaoEntity } from "../generated/schema"

export function handleDAOLaunched(event: DAOLaunched): void {
  let dao = DaoEntity.load(`${event.transaction.from.toHex()}-${event.params._token.toHex()}`)

  if (!dao) {
    dao = new DaoEntity(`${event.transaction.from.toHex()}-${event.params._token.toHex()}`)
  }

  dao.owner = event.params._owner
  dao.tokenAddress = event.params._token
  dao.createdAt = event.params._createdAt
  dao.tokenName = event.params._tokenName
  dao.tokenSymbol = event.params._tokenSymbol
  dao.totalSupply = event.params._totalSupply
  dao.ownerInitialSupply = event.params._ownerInitialSupply

  dao.save()
}
