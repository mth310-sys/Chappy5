# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **331件地点 / 時系列本線2008-12-14（鬼浜爆走紅蓮隊 爆音烈士編）まで完了**。
- 今回、直前引継ぎの2008-12-15群から最優先候補を監査し、**332 `シンゾウニンゲン（新造人間キャシャーン）`（JPS）** を追加。
- 当時グリーンべるとで **2008-12-14から納品**、ALL7で **2008-12-15導入予定**を確認したため、納品/導入定義差を保持し、レコード主日付は当時業界一次の12/14とした。
- **既存332件の再追加禁止。**

## 332. シンゾウニンゲン（新造人間キャシャーン）

record:
- `docs/real_machine_db/machines/2008-12-14_shinzo-ningen.md`

要点:
- machineName: シンゾウニンゲン（新造人間キャシャーン）
- manufacturer: **JPS（ジェイピーエス）**
- releaseDate: **2008-12-14**（グリーンべると納品開始） / ALL7導入予定 **2008-12-15**
- modelName: `シンゾウニンゲン`
- inspectionNumber: `8S0731`
- identity: **2006年同名機「新造人間キャシャーン / 型式パープル2」とは別機種**。2008年機のデータへ2006年機のスペックを混入させない。
- generation: 5号機
- systemType: **A+ART / TYPE-F**
- 設定別機械割: **96.3 / 98.8 / 100.5 / 103.9 / 109.7 / 116.7%**。P-WORLD・当時系資料・旧DB/回顧で同系列を確認。
- ボーナス合算: **1/39.3 / 1/39.3 / 1/39.2 / 1/39.2 / 1/39.1 / 1/39.0**。個別BIG/MISSION BONUS設定別確率は十分再探索後も未確定のため逆算しない。
- BIG: **130枚超払い出し終了 / 純増約90枚**（当時販社系資料）。MISSION BONUSは4Gまたは4回入賞終了、比較可能な純増枚数は未確定。
- ART `キャシャーンタイム`（資料に`バトルタイム`表記もあり）: **約+2.0枚/G**、1セット10G、平均20セット、最大100セット＝最大1000G。
- ART主要契機: 白7（15枚小役）入賞、通常ボーナス当選時抽選、**天井200G後のボーナス当選**。
- 通常時は **通常 / 高確率 / 超高確率**。当時業界記事では高確・超高確中のボーナス当選はART100%当選。
- 50枚ベースは表記揺れ・型式・メーカー・50枚/1000円/ベース/コイン持ちで再探索後も確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 天井

- 当時グリーンべると: **天井200G後のボーナス当選**をART発動条件として明記。
- 当時販社系資料: **通常時200G消化で天井超高確率モードへ移行**。
- したがって200G到達でボーナス/ARTが即発動する天井ではなく、**200Gで天井超高確率へ入り、その後のボーナス当選がART契機**となる構造として保存。

### v0.7 resetBehavior

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の200Gカウンタ・内部3状態・ART関連状態の初期化/再抽選を直接資料で確定できず。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の200Gカウンタ、内部状態、ART権利/残G引継ぎを確定できず。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。電源OFF→ONのみ時の200Gカウンタ・内部状態・ART状態処理を確定できず。
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。200G天井自体は確定したが、設定変更で0Gへ戻るか据え置きで継続するかは不明。
- ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。変更時専用短縮天井/別天井は確認できず。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/高確/超高確の存在は確認できるが、変更時振り分けは未確認。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。通常200G天井をリセット恩恵とは扱わない。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、200G挙動など本機固有の変更判別条件を確定できず。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00003901/
- https://www.all7.jp/plans/index/2008/12
- https://www.p-world.co.jp/machine/database/5391
- https://ameblo.jp/samurai777net/entry-10160992884.html
- https://www.a-slot.com/SHOP/jps11.html
- https://pachiseven.jp/articles/detail/11436
- https://pachiseven.jp/articles/detail/14268
- https://slothistory.com/zenkishu_7.html

## 今回の境界監査

- 直前引継ぎでは `シンゾウニンゲン` を2008-12-15群としていたが、当時グリーンべると本文から **12/14納品開始**を回収。ALL7の12/15導入予定と1日差があるため、平均/丸めせず納品/導入定義差として保持した。
- 2006年にも同じ表示名「新造人間キャシャーン」があるが、2006年は型式`パープル2`、2008年は型式`シンゾウニンゲン`・検定`8S0731`。P-WORLD/回顧資料で別機種と確認したため完全分離。
- `魔界城` / `シャドウハーツII` は引き続き具体導入日が確定した場合のみ遡及挿入する。月情報だけで推測しない。

## 次回再開地点

1. **LATEST_HANDOFF基準332件地点 / 時系列本線は2008-12-14のシンゾウニンゲンまで完了。**
2. 次は同境界の未処理 **2008-12-15群** を続行し、最優先で **`トリプル沖V`（デンケン販売）** を既存レコード照合 → 正式メーカー/型式/具体導入日 → 性能コア → v0.7 resetBehavior の順で処理する。
3. その次は **`HAIBいちろう`（イープレイ）**。
4. 同日群を閉じた後、具体日確定済みの **2008-12-22 `スロット代紋TAKE2`** へ進む。
5. `魔界城` / `シャドウハーツII` は具体導入日が後続調査で確定した時点で時系列へ遡及挿入する。
6. 欠損は表記揺れ・型式・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間を含む検索語・資料系統を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とする。

## コミット（今回）

- 332 シンゾウニンゲン: `11339018ca7ffe3ed3c94cda8033935f07bde329`
