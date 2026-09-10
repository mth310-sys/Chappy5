更新日: 2026-09-10

## 現在地点
- recordCount: **1185**
- latestRecordAdded: **パチスロ これはゾンビですか？**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-04-09_kore-wa-zombie-desu-ka.md`
- chronologicalFrontier: **2018-04-09**
- frontierLatestMachine: **パチスロ これはゾンビですか？ — No.1185**
- schema: **resetBehavior v0.7**
- status: **2018-04-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1184 `パチスロGirls Guns Groovy` を再取得して開始。
- `INDEX.md` は初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1184件 / chronologicalFrontier 2018-04-02 / 4/2群CLOSED**。
- GitHub検索で `これはゾンビですか？` の既存レコードがないことを確認し、No.1185としてperformance core + resetBehavior v0.7を追加。
- パチビー、K-Navi、ちょんぼりすた、パチトラが2018-04-09導入で一致。4/9の独立追加パチスロ機を複数検索系統で固定できなかったため、4/9群をCLOSE。

## No.1185 — パチスロ これはゾンビですか？
- path: `docs/real_machine_db/machines/2018-04-09_kore-wa-zombie-desu-ka.md`
- manufacturer: **北電子**
- releaseDateCanonical: **2018-04-09**
- formalModelName: `これはゾンビですか／KA`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- generation/system: **5.9号機 / A+ART / ボーナス+CZ+セット継続ART**
- settings: **1 / 2 / 4 / 6**
- 機械割: **97.9 / 100.7 / 103.6 / 108.2%**
- S-BIG: **1/1820.4 / 1/1489.4 / 1/1365.3 / 1/1170.3**
- BIG: **1/585.1 / 1/528.5 / 1/481.9 / 1/420.1**
- REG: **1/910.2 / 1/744.7 / 1/655.4 / 1/555.4**
- ボーナス合算: **1/297.9 / 1/256.0 / 1/230.8 / 1/198.6**
- ART初当たり: **全設定 約1/466**
- ボーナス+ART合成: **1/181.8 / 1/165.3 / 1/154.4 / 1/139.3**
- 50枚ベース: **約33.3G/50枚**
- ART純増: **単体約1.4枚/G / ボーナス込み約1.9枚/G**
- S-BIG: **約252枚** / BIG: **約150枚** / ゾンビボーナス: **約48枚**
- ART: **1セット平均40G+α**
- 天井: **非搭載**

### resetBehavior v0.7
- 設定変更時の内部状態は本機専用朝一表で`リセット`を直接確認。具体的な通常/高確/超高確振り分けは`UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後の開始ステージは`相川家ステージ`。
- 電源OFF→ON時の内部状態は資料上`調査中`で、再探索後も`UNVERIFIED_AFTER_RESEARCH`。開始ステージは`相川家ステージ`。
- 据え置きを純電断と分けた内部状態/CZ/ART状態の直接契約は`UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載なので天井カウンタ/短縮天井は`NOT_APPLICABLE`。
- 朝一専用モード・主要リセット恩恵は`NONE_CONFIRMED_AFTER_RESEARCH`。資料中の「5.9号機の仕様上、朝イチ恩恵は存在しない可能性が高い」は推測表現なので確定契約へ昇格しない。
- 本機固有の有利区間リセット契約、ガックン、初期出目、ランプ等による変更判別は`UNVERIFIED_AFTER_RESEARCH`。
- 設定変更と純電断で開始ステージが同じため、相川家ステージ単独では変更判別不能。

## CONFLICT / 品質メモ
- ART純増`約1.4枚/G`と`ボーナス込み約1.9枚/G`は定義差でありCONFLICTではない。別指標として保持。
- ART初当たりはスペック表で設定1欄1/466.3、同ページ本文で「全設定共通1/466」。canonicalは`全設定 約1/466`、精密設定1値は補足扱い。
- certificationNumberは北電子公式検定ページ、型式表記、公示系検索を横断したが今回固定できず`UNVERIFIED_AFTER_RESEARCH`。

## 2018-04-09群監査
- パチビー、K-Navi、ちょんぼりすた、パチトラで `これはゾンビですか？` の2018-04-09導入が一致。
- 4/9の日付・メーカー別・表記揺れ検索を追加実施したが、同日の別パチスロ新台を固定できず。
- status: `2018-04-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。

## 次導入日群の先行確認
- **2018-04-16**: `不二子TYPE-A+` — オリンピア/平和系。次回の最優先候補。
- その後の既知候補は **2018-04-23 `パックマン`**。
- 次回は4/16群を全メーカー・別スペック・表記揺れで監査してからNo.1186を確定する。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- resetBehaviorで推測表現「?」「可能性が高い」「調査中」を確定契約へ昇格しない。
- 5.9号機一般論から本機固有の有利区間リセット契約を推定転記しない。
- `INDEX.md` は旧スナップショット。次回も `LATEST_HANDOFF.md` + main実レコードを優先する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1185を再取得。
2. **1185件 / chronologicalFrontier 2018-04-09 / 4/9群CLOSED** を正本として継続。
3. **2018-04-16群OPEN**。`不二子TYPE-A+` をNo.1186候補として既存重複確認。
4. performance core + resetBehavior v0.7を収集。
5. 4/16同日全メーカー・別スペック・表記揺れを横断監査して群CLOSE判定。
6. その後、2018-04-23 `パックマン` を境界再監査後に処理。
7. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1185 これはゾンビですか？
- 北電子公式検定情報: https://www.kitadenshi.co.jp/slot-kentei/korezon/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/54588/
- パチビー: https://www.pachibee.jp/machines/movie/218020005
- パチビー仕様解説: https://www.pachibee.jp/machines/lecture/218020005
- K-Navi: https://p-kn.com/slot/2961/
- P-WORLD: https://www.p-world.co.jp/machine/database/8597
- パチトラ: https://p-tora.com/i5315a4/
- pacnk: https://pacnk.com/slot/tools/sh_korehazombidesuka.html
