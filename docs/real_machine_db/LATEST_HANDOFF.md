更新日: 2026-09-11

## 現在地点
- recordCount: **1262**
- latestRecordAdded: **ぱちスロ ゲッターロボ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-01-21_pachislot-getter-robo.md`
- chronologicalFrontier: **2019-01-21**
- frontierLatestMachine: **ぱちスロ ゲッターロボ — No.1262**
- schema: **resetBehavior v0.7**
- status: **2019-01-21_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1261を再取得して開始。
- INDEXは旧スナップショット（19件）のため、LATEST_HANDOFF + main実レコードを正本として継続。
- handoff指定の未処理 `ぱちスロ ゲッターロボ` をNo.1262として性能コア + resetBehavior v0.7で登録。
- KYORAKU公式により全国導入日2019-01-21をcanonical固定。2018-09-21の直営2店舗先行導入は別スコープとして保持。
- 型式 `SパチスロゲッターロボKB` を複数資料で固定。検定番号そのものは型式/京楽/検定通過日/8S系等へ検索を拡張したが高信頼固定できずUNVERIFIED。
- 2019-01-21群を当時導入一覧・各機個別資料・25/30Φ差で再監査。登録済み6レコードで追加候補を固定できなかったためCLOSED。
- 次の全国導入群は2019-02-04。複数一覧で `A-SLOT DARTSLIVE`、`ミリオンルーレット`、`ニューパルサーDX ～チェリーバージョン～` を確認。

## No.1262 — ぱちスロ ゲッターロボ
- releaseDateCanonical: **2019-01-21（全国導入）**
- priorLimitedRelease: **2018-09-21（サンシャインKYORAKU栄・平針）**
- manufacturer: **京楽産業．**
- generation/system: **6号機 / ノーマルA / 技術介入**
- formalModel: **`SパチスロゲッターロボKB`**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- settings: **1 / 2 / 5 / 6**
- 市場平均機械割: **98.6 / 99.9 / 101.6 / 103.7%**
- 完全攻略時機械割: **101.0 / 102.4 / 104.2 / 106.4%**
- BIG合算: **1/174.3 / 1/169.8 / 1/167.2 / 1/163.8**
- REG: **1/230.8 / 1/221.4 / 1/206.1 / 1/199.2**
- ボーナス合算: **1/99.3 / 1/96.1 / 1/92.3 / 1/89.9**
- baseGamesPer50: **46.3～50.0G**
- BIG: **最大155枚**
- REG: **60枚**
- 天井: **非搭載**

### resetBehavior v0.7
- settingChange: 天井/ゲーム数管理はN/A。朝一初回ボーナス入賞時のみ設定変更判別用パネルフラッシュ抽選あり。内部成立状態などの本機固有契約はUNVERIFIED。
- carryOver: 据え置きを純電断から完全分離した内部成立状態/初期出目/演出モード保持契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: 純電源OFF→ON時の内部成立状態/初期出目/選択演出モード保持は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset / ceilingAfterReset: `NOT_APPLICABLE`（天井・ゾーン非搭載）。
- modeAfterReset: 朝一専用内部モード/当選優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。NORMAL/SIMPLE G MODEは遊技者選択演出で内部モードと分離。
- advantageousSectionReset: ノーマルAとして朝一狙い用の比較項目は `NOT_APPLICABLE_TO_GAMEPLAY`。世代一般論から補完しない。
- resetBenefits / penalties: 出玉上のリセット恩恵・不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: **朝一1回目のボーナス入賞時に下パネルフラッシュで設定変更確定**。パチマガスロマガ/一撃で一致。
- numericResetData: BIG時フラッシュ=設定1/2/5 **25.0%**、設定6 **33.3%**。REG時=設定1/2/5 **20.0%**、設定6 **25.0%**。
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- lastRetroQaResult: **アクアビーナス — PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。main上ですでにv0.7 QA済みなら重複編集せずGit追加順の次の未QA機へ自動前進する。

## 2019-01-21群
### 登録済み
- No.1257 ぱちスロAKB48 エンジェル
- No.1258 戦国BASARA HEROES PARTY
- No.1259 パチスロ フィーバークィーンII
- No.1260 島漢（25Φ）
- No.1261 島漢-30
- No.1262 ぱちスロ ゲッターロボ

### 群判定
- **2019-01-21_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- 1/21当時導入一覧と個別資料を再照合し、上記以外の独立パチスロ機を今回固定できず。

## 次群候補 — 2019-02-04
複数導入一覧で以下を確認。次回は同日群を再監査し、時系列/型式を固定してNo.1263から継続する。
1. **A-SLOT DARTSLIVE** — Sammy系 / 5.9号機A+RT。
2. **ミリオンルーレット** — コナミアミューズメント。
3. **ニューパルサーDX ～チェリーバージョン～** — 山佐 / 5.9号機ノーマル。

## 継続注意事項
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを再取得。
- 並行更新があれば最新mainを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一性能でも正式型式・製造元・25/30Φ等の明確な派生差は全機種方針に従い独立収録を検討。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- COMPLETE_COREの性能完了判定とreset QA状態を分離。
- 競合値は平均せずCONFLICT保持。

## 次回再開地点
1. 最新mainを再取得しrecordCount/HEAD競合を確認。
2. 2019-01-22～2019-02-03境界を監査。
3. **2019-02-04群の先頭未処理機をNo.1263候補として確定**。現時点では `A-SLOT DARTSLIVE` を先頭候補とするが、同日内の正式発売順/漏れ監査を優先。
4. 性能コア + resetBehavior v0.7を収集し、群内を飛ばさず継続。
5. 遡及QAは `2006-12_thunder-v-special.md` から確認し、既QAなら次の未QA機まで進める。

## 主要出典 — 取得日 2026-09-11
### ぱちスロ ゲッターロボ
- KYORAKU公式: https://www.kyoraku.co.jp/news/20190121.php
- グリーンべると: https://web-greenbelt.jp/00010744/
- パチマガスロマガ ボーナス: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/09/h-1.php
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/09/c.php
- パチマガスロマガ 朝一: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/09/en02.php
- 一撃 朝一: https://1geki.jp/slot/s_getterrobo/62/
- 一撃 天井: https://1geki.jp/slot/s_getterrobo/3/
- 一撃 ボーナス: https://1geki.jp/slot/s_getterrobo/61/
- P-WORLD: https://www.p-world.co.jp/machine/database/8772
- pachinko's blog: https://pachinko.hatenablog.jp/entry/2018/09/getter-robo
- 京楽検定通過整理: https://q-and-a.hatenablog.com/entry/%E4%BA%AC%E6%A5%BD%E7%94%A3%E6%A5%AD%E3%81%AE%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E

### 次群監査
- 一撃 2019年2月新台スケジュール: https://1geki.jp/newmachinecalender/201902/
- パチンコ・パチスロ.com 2019新台カレンダー: https://pachinkopachisro.com/archives/52807194.html
