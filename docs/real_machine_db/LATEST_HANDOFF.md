更新日: 2026-09-11

## 現在地点
- recordCount: **1259**
- latestRecordAdded: **パチスロ フィーバークィーンII**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-01-21_pachislo-fever-queen-ii.md`
- chronologicalFrontier: **2019-01-21**
- frontierLatestMachine: **パチスロ フィーバークィーンII — No.1259**
- schema: **resetBehavior v0.7**
- status: **2019-01-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1258を再取得して開始。
- INDEXは旧スナップショットのため、LATEST_HANDOFF + main実レコードを正本として継続。
- 開始時mainは1258件、No.1258 `戦国BASARA HEROES PARTY`、2019-01-21群OPEN。
- handoff指定の未処理先頭 No.1259 `パチスロ フィーバークィーンII` を性能コア + resetBehavior v0.7で登録。
- 2019-01-21群は島漢/ゲッターロボ候補が残るためOPENを維持。

## No.1259 — パチスロ フィーバークィーンII
- manufacturer canonical: **SANKYO**（公式ブランド表記を優先。P-WORLD/中古DBにビスティ表記あり）
- releaseDateCanonical: **2019-01-21**
- generation/system: **5.9号機 / A+RT / リアルボーナス+30G RT**
- settings: **1 / 2 / 5 / 6**
- formalModelName: **パチスロ フィーバークィーンII b** (`OFFICIAL`)
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- 機械割: **97.5 / 99.9 / 104.2 / 109.3%**
- 赤7BIG: **1/993 / 1/963 / 1/936 / 1/910**
- 青7BIG: **1/402 / 1/390 / 1/376 / 1/356**
- REG: **1/346 / 1/321 / 1/299 / 1/268**
- ボーナス合算: **1/156 / 1/148 / 1/141 / 1/131**
- baseGamesPer50: **約33.3G**
- RT純増: **現状維持程度**。比較可能な枚/G値は `UNVERIFIED_AFTER_RESEARCH_AS_NUMERIC_RATE`。
- 赤7BIG **300枚** / 青7BIG **240枚** / REG **最大108枚**。
- 全ボーナス後 **30G RT**。
- 通常ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- settingChangeBehavior: **RT状態リセット / 演出モード=クィーンモード / 保留・リーチ=リセット**。本機専用朝一表2系統で一致。
- powerCycleBehavior: **RT状態引継ぎ / 演出モード=クィーンモード / 保留・リーチ=リセット**。本機専用朝一表2系統で一致。
- carryOverBehavior: 据え置きを純電源OFF→ONと分離した直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounterReset / ceilingAfterReset: 通常天井非搭載につき `NOT_APPLICABLE_NORMAL_GAME_CEILING`。設定変更短縮天井なし。
- modeAfterReset: 演出モードは設定変更/電断ともクィーンモード。朝一専用内部当選モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: 本機固有の適用有無/設定変更契約を直接固定できず `NOT_CONFIRMED_AS_APPLICABLE / UNVERIFIED_AFTER_RESEARCH`。一般5.9号機仕様から補完しない。
- resetBenefits: 朝一専用短縮天井・ボーナス当選率・RT優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 設定変更時はRT状態リセット。その他は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: RT状態の差は材料になり得るが据え置き独立契約未固定。保留/リーチと演出モードは双方同じため変更判別不可。本機固有ガックン条件/率は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開朝一専用当選率/恩恵率/ガックン率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### quality notes
- SANKYOオンライン博物館が公式型式名 `パチスロ フィーバークィーンII b` を明記。
- 導入日はAmusement Japan 2018-11-28当時記事と複数解析で2019-01-21一致。
- K-NaviのBIG合算欄には設定2=1/278という個別BIG値と整合しない表記があるため、BIG合算はcanonical採用せず公式の赤/青BIG個別値と全ボーナス合算を優先。
- メーカーは公式ブランドSANKYOをcanonical。一部DBのビスティ表記は資料差として記録。
- 検定番号は表記揺れ/型式名/公安委員会/検定通過/旧DB等まで再探索したが直接固定できずUNVERIFIED。

## 2019-01-21群
### 登録済み
- No.1257 ぱちスロAKB48 エンジェル
- No.1258 戦国BASARA HEROES PARTY
- No.1259 パチスロ フィーバークィーンII

### 未処理候補
1. **島漢** — 2019-01-21導入。25Φ=平和 / 30Φ=アムテックス、性能同一と一撃が明記。型式差と独立レコード要否を確認してNo.1260候補を決定。
2. **ぱちスロ ゲッターロボ** — KYORAKU公式告知の2019-01-21全国導入を二次引用で確認。島漢処理後候補。

### 群判定
- **2019-01-21_GROUP_OPEN**。
- 2019-01-17付導入直前一覧では、フィーバークィーンII / AKB48エンジェル / 戦国BASARA HEROES PARTY / 島漢 / ゲッターロボの5機を列挙。
- 残り処理後に全メーカー/別型式/別スペック/PB/地域差監査で追加なしを確認してからCLOSED判定。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`**。
- lastRetroQaResult: **モエる まりんバトる — PARTIAL_RESEARCH_EXHAUSTED**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`（アクアビーナス）**。
- 今回は新規時系列群処理を優先し、QAカーソル変更なし。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別型式/別スペック/PB/地域差監査後のみCLOSED。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1259を再取得。
2. **1259件 / chronologicalFrontier 2019-01-21 / `2019-01-21_GROUP_OPEN`** を正本として継続。並行更新があれば最新HEAD優先。
3. **島漢 25Φ/30Φ** の型式差・独立レコード要否を先に固定し、最古未処理を **No.1260** として性能コア + resetBehavior v0.7で収集。
4. 次に **ぱちスロ ゲッターロボ** を処理。
5. 1/21群を全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定。
6. 遡及QAは `docs/real_machine_db/machines/2006-12_aqua-venus.md` から再開。

## 主要出典 — 取得日 2026-09-11
### No.1259 パチスロ フィーバークィーンII
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/720/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000919/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/74772/
- pachislo-data: https://pachislo-data.com/sankyo/82208
- K-Navi: https://p-kn.com/slot/3140/
- P-WORLD: https://www.p-world.co.jp/machine/database/8808
- 5号機クロニクル: https://5goki.com/bisty

### 2019-01-21群監査
- 導入直前一覧: https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/01/17/230000
- 島漢 一撃: https://1geki.jp/slot/s_shimamusuko
- 島漢 すろぱちくえすと: https://www.slopachi-quest.com/article/shimamusuko-settei/
- ゲッターロボ/KYORAKU公式告知引用: https://psumma.jp/pachislo/47186/
