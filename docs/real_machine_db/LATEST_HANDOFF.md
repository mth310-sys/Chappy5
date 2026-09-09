更新日: 2026-09-10

## 現在地点
- recordCount: **1163**
- latestRecordAdded: **まめ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-12-04_mame.md`
- chronologicalFrontier: **2017-12-04**
- frontierLatestMachine: **まめ — No.1163**
- schema: **resetBehavior v0.7**
- status: **2017-12-04_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__NEXT_CONFIRMED_2017-12-18__2017-11_MONTH_DAY_UNRESOLVED_IMISORE_XX**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1160〜1161を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1161件 / chronologicalFrontier 2017-12-04 / 12/4群OPEN**。
- handoff指定どおりNo.1162 **「パチスロ ゴッドイーター2」**、No.1163 **「まめ」** をperformance core + resetBehavior v0.7で収集。
- K-Navi 2017年12月新台カレンダーは12/4パチスロ群を **BLACK LAGOON3 / パチスロ ゴッドイーター2 / まめ** の3機として列挙。別2017年導入カレンダーも同じ3機を12/4群として掲載するため、No.1161〜1163で **2017-12-04_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** と判定。
- K-Navi月間カレンダーでは12/4の次の全国導入パチスロは2017-12-18 **「SLOT魔法少女まどか☆マギカA」**。12/5〜12/17に別の全国一斉導入機は掲載されていない。地域差・別スペックは次回境界監査を継続する。

## No.1162 — パチスロ ゴッドイーター2
- path: `docs/real_machine_db/machines/2017-12-04_god-eater2.md`
- manufacturer: 山佐
- releaseDate: 2017-12-04
- generation/system: 5.9号機 / A+ART
- formalModelName: `パチスロゴッドイーター2／CC`
- certificationNumber: `7S0998`
- 機械割: **97.6 / 99.0 / 100.2 / 102.1 / 105.2 / 108.4%**
- ART初当たり: **1/390.42 / 387.41 / 385.11 / 382.39 / 379.11 / 375.89**
- 50枚ベース: canonical **約33G**。後年資料に約35〜37G表記があり定義差/競合候補として保持。
- ART純増: 約1.4枚/G、ボーナス込み約1.8枚/G系統。
- 基本獲得: Burst BIG 390枚 / BIG150枚 / REG約40枚 / ART40〜100G。
- 天井: **なし**。

### resetBehavior v0.7
- 設定変更: 有利区間ランプ消灯、**非有利区間へ**。ゲーム数天井はN/A。
- 純電源OFF→ON: 有利区間・RT状態を引き継ぐ当時解析。前日有利区間中ならランプ点灯継続が据え置き推測材料。
- RT状態の設定変更時契約は当時資料でも「調査中」で、再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一ステージは実戦上カフェorエントランス。ただし確定判別契約ではない。
- 天井短縮/朝一高確固定/初当たり優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有のガックン確定契約/発生率は `UNVERIFIED_AFTER_RESEARCH`。

## No.1163 — まめ
- path: `docs/real_machine_db/machines/2017-12-04_mame.md`
- manufacturer: ベルコ
- releaseDate: 2017-12-04
- generation/system: 5.9号機 / ノーマルA / 完全告知
- formalModelName: `まめ/A3`（二次資料複数。公的一次未固定）
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- 機械割: **98.0 / 99.1 / 101.3 / 104.2 / 108.2 / 112.8%**
- BIG: **1/296.5 / 292.6 / 283.7 / 270.8 / 253.0 / 234.9**
- REG: **1/339.6 / 331.0 / 307.7 / 287.4 / 261.1 / 234.9**
- 合算: **1/158.3 / 155.3 / 147.6 / 139.4 / 128.5 / 117.4**
- 50枚ベース: canonical **約34.5G**、別解析約33G。平均せず定義差/競合候補として保持。
- 基本獲得: BIG312枚 / REG104枚。
- 天井: **なし**。

### resetBehavior v0.7
- 純ノーマル機で天井・AT/ART/CZ・ゲーム数解除なし。これらのreset契約はN/A。
- 設定変更/据え置き/純電断時の成立済みボーナス、リール低レベル状態、液晶告知モードの直接契約は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。一般論で補完しない。
- 朝一専用モード/高確/初当たり優遇/天井短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。
- すろぱちくえすとは「ベルコ機はガックン有効の可能性が高い」とするが、本機固有確定契約ではないため `POSSIBLE_GAKKUN_NONDETERMINISTIC`。
- 導入日は多数資料2017-12-04に対し単一古DBに2017-10-19表記があるため `CONFLICT_SECONDARY_RELEASE_DATE_2017_10_19` を保持。

## 12/4群監査
- K-Navi 2017年12月カレンダー: 12/4パチスロは **BLACK LAGOON3 / パチスロ ゴッドイーター2 / まめ**。
- モゲスロ2017年導入カレンダーも12/4を同じ3機として掲載。
- No.1161〜1163ですべて登録済みのため **2017-12-04_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- K-Naviでは次の全国パチスロ導入日が2017-12-18、機種は **SLOT魔法少女まどか☆マギカA** のみ。

## 品質メモ
- 5.9号機有利区間1500G上限をゲーム数天井と混同しない。
- ゴッドイーター2は設定変更時非有利区間へ戻ることと「朝一恩恵」を分離。天井非搭載なので短縮恩恵はない。
- まめは純ノーマルのため、有利区間を用いた朝一挙動を推測で追加しない。
- `イミソーレXX`の日単位導入日は引き続き `UNVERIFIED_AFTER_RESEARCH`。月単位No.1159として回収済みで本線は止めない。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1161〜1163を再取得。
2. **1163件 / chronologicalFrontier 2017-12-04 / 12/4群CLOSED** を正本として継続。
3. 12/5〜12/17の地域差・別スペック漏れを境界監査する。決定的な未登録がなければ本線を進める。
4. **2017-12-18「SLOT魔法少女まどか☆マギカA」= No.1164候補** をperformance core + resetBehavior v0.7で収集。
5. 12/18同日全メーカー監査を行い、漏れがなければ12/18群CLOSED判定。その後2017年末残り日付へ前進。
6. `イミソーレXX` exact dayは新しい決定的資料が出た場合のみ追補。
7. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### ゴッドイーター2
- HAZUSE: https://hazuse.com/machine/pachislot/7S0998/
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/7S0998/genre/201/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/224/h.php
- 期待値見える化: https://slotjin.com/slot/godeater2/
- K-Navi: https://p-kn.com/slot/2913/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/48186/

### まめ
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/mame/
- PiDEA X: https://www.pidea.jp/articles/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%82%E5%91%8A%E7%9F%A5%E3%82%82%E3%82%A4%E3%83%B3%E3%83%91%E3%82%AF%E3%83%88%E6%BA%80%E7%82%B9%E3%81%AE%E3%80%8C%E3%81%BE%E3%82%81%E3%80%8D%E7%99%BB%E5%A0%B4%EF%BC%8F%E3%83%99%E3%83%AB%E3%82%B3
- 遊技通信web転載: https://nagasaki-yukyo.or.jp/information/%E3%83%99%E3%83%AB%E3%82%B3%E3%80%81%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%97%E3%81%AE%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%81%BE%E3%82%81%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8/
- K-Navi: https://p-kn.com/slot/2915/
- すろぱちくえすと: https://www.slopachi-quest.com/article/mame/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/48691/
- P-WORLD: https://www.p-world.co.jp/machine/database/8529

### 群監査
- K-Navi 2017年12月カレンダー: https://p-kn.com/calendar/201712/
- モゲスロ 2017年導入カレンダー: https://moge-site.com/new-slot2017
