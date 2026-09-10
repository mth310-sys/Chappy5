更新日: 2026-09-11

## 現在地点
- recordCount: **1271**
- latestRecordAdded: **CTザクザク七福神**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-03-18_ct-zakuzaku-shichifukujin.md`
- chronologicalFrontier: **2019-03-18**
- frontierLatestMachine: **CTザクザク七福神 — No.1271**
- schema: **resetBehavior v0.7**
- status: **2019-03-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1270を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 開始時mainはrecordCount 1270、2019-03-04群CLOSED。3/5〜3/17境界を監査し、追加の全国導入機を固定できず3/18へ前進。
- handoff指定の `CTザクザク七福神` をNo.1271として性能コア + resetBehavior v0.7で登録。
- HAZUSEで型式 `SザクザクシチフクジンEE` / 検定番号 `8S0642` / 導入日2019-03-18を固定。
- 設定変更時はCT RESET + 有利区間ランプ消灯、純電源OFF→ONはCT + 有利区間ランプCARRY_OVERを本機固有表で固定。
- 設定別BIG/REG/合算/機械割は複数解析一致値を保存。ただし導入直後の実戦BIG乖離疑義はCONFLICT_NOTEとして別保持し、理論表を実戦値で置換していない。
- 2019-03-18群を複数新台カレンダー/個別機種DBで監査し、追加メーカー/別型式/別スペック/PB/地域差機を固定できなかったためCLOSED。

## No.1271 — CTザクザク七福神
- manufacturer: **山佐**
- formalModel: **`SザクザクシチフクジンEE`**
- certificationNumber: **`8S0642`**
- generation/system: **6号機 / ノーマルA+CT / 技術介入**
- settings: **1 / 2 / 5 / 6**
- BIG: **1/197.4 / 1/192.7 / 1/191.6 / 1/190.5**
- REG: **1/202.3 / 1/191.6 / 1/185.1 / 1/179.6**
- 合算: **1/99.90 / 1/96.09 / 1/94.16 / 1/92.43**
- 市場掲載機械割: **98.2 / 100.4 / 102.4 / 104.6%**
- 完全攻略時: **101.1 / 103.6 / 105.7 / 108.2%**
- baseGamesPer50: **約39.0G**
- CT純増: **約0.2枚/G（ほぼ現状維持）**
- BIG / REG: **最大150枚 / 約40枚**
- CT: **最低77G〜最大100G**
- BIG後CT突入: **50%以上**
- ボーナス+CTループ: **約63.4%**
- 天井: **非搭載**

### resetBehavior v0.7
- settingChange: **CT RESET / 有利区間ランプ消灯**。
- powerCycle: **CT CARRY_OVER / 有利区間ランプCARRY_OVER**。
- carryOver: 据え置き独立条件の全内部状態契約は `PARTIAL_CROSSCHECKED_WITH_POWER_CYCLE`。
- gameCounterReset / ceilingAfterReset: `NOT_APPLICABLE`（天井・規定Gゾーン非搭載）。
- modeAfterReset: 朝一専用モード/設定変更専用振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- stateAfterReset: CTはRESET。CT以外の追加内部状態契約は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- advantageousSectionReset: 設定変更で有利区間ランプ消灯、純電断で引継ぎ。
- resetBenefits: 天井短縮、朝一ボーナス/CZ優遇などの専用恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 朝一有利区間ランプ点灯 / CT残存は設定変更否定方向の主要材料。本機固有ガックン率は未固定。
- numericResetData: 天井/短縮 `NOT_APPLICABLE`、resetModeDistribution / resetBonusBoost `NONE_CONFIRMED_AFTER_RESEARCH`、gakkunRate `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### quality / conflict note
- 当時広く掲載されたBIG確率は設定1〜6で **1/197.4〜1/190.5**。
- 導入直後、実戦集計でBIGが約1/240近辺とする指摘、一部大手解析サイトがスペック表を非掲載化したとの当時記録あり。
- 確定代替理論値を高信頼で固定できないため、複数解析一致の表をcanonicalとして保持しつつ `CONFLICT_NOTE_ADVERTISED_ANALYSIS_BIG_RATE_VS_EARLY_FIELD_OBSERVATION` を保存。

## 2019-03-18群
### 登録済み
- No.1271 CTザクザク七福神

### 群監査
- モゲスロ2019新台カレンダーは3/4群の次を3/18 `CTザクザク七福神`、その次を3/25 `ドンちゃん2` と掲載。
- HAZUSE / K-Navi / すろぱちくえすともCTザクザク七福神の2019-03-18導入で一致。
- 3/5〜3/17境界および3/18同日について別メーカー/別型式/別スペック/PB/地域差を検索したが、独立登録すべき追加機を固定できず **2019-03-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。すでにv0.7 QA済みなら重複編集せず次の未QA機へ自動前進。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1271を再取得し並行更新確認。
2. **2019-03-19〜03-24境界を短く全メーカー監査**。
3. 次候補は **2019-03-25 `ドンちゃん2`**。未登録ならNo.1272第一候補として性能コア+resetBehavior v0.7を収集。
4. 3/25同日群の別型式/別スペック/PB/地域差を監査後CLOSED可否判定。
5. 遡及QAは `2006-12_thunder-v-special.md` から確認。

## 主要出典 — 取得日 2026-09-11
### CTザクザク七福神
- HAZUSE: https://hazuse.com/machine/pachislot/8S0642/
- K-Navi: https://p-kn.com/slot/3181/
- パチマガスロマガ ボーナス: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/231/h-1.php
- パチマガスロマガ 概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/231/a.php
- パチマガスロマガ CT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/231/02.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/ct-shichihukujinn/
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/10721/greenbelt
- 長崎県遊技業協同組合（遊技通信web転載）: https://nagasaki-yukyo.or.jp/information/%E5%B1%B1%E4%BD%90%E3%80%816%E5%8F%B7%E6%A9%9F%E7%89%88%E3%81%AEct%E6%A9%9F%E8%83%BD%E3%82%92%E6%90%AD%E8%BC%89%E3%81%97%E3%81%9F%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/75845/comment-page-2/
- slotexpectation: https://slotexpectation.com/archives/13781/
- モゲスロ2019新台カレンダー: https://moge-site.com/new-slot2019
