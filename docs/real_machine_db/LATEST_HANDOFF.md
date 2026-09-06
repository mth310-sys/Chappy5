# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **811**
- latestRecordAdded: **喧嘩祭**（KPE）— 2014-04-21
- latestRecord: `docs/real_machine_db/machines/2014-04-21_kenka-matsuri.md`
- chronologicalFrontier: **2014-04-21**
- frontierLatestMachine: **喧嘩祭**
- schema: **resetBehavior v0.7**
- status: **2014-04-21_GROUP_OPEN / KENKA_MATSURI_ADDED / SKYLOVE_RESET_QA_RECHECKED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードを再読して正本化。
- 作業開始時、会話直前申告よりmainが先行しており **809件 / 2014-04-07 サムライスピリッツ**。調査中にさらに **810件 / モンキーターンII** までmainが更新されたため、競合を避けて最新mainへ再同期した。
- 810件時点で **04-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 04-08〜04-20_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH** を維持。
- K-Navi 2014年4月全国一斉導入カレンダーで04/21群は **喧嘩祭 / マジックモンスター3 ぶっちぎり!魔界グランプリ / 緑ドンVIVA2 / ニューペガサス** の4機。先頭の喧嘩祭を811件目として追加し、同日群はOPEN。

## 今回追加 — 喧嘩祭

### identity / 性能コア

- manufacturer: **KPE**。
- hall start: **2014-04-21**（K-Navi / パチビー）。コナミ公式アーカイブは2014年4月稼働。
- formalModelName: **喧嘩祭KR**。
- generation/system: **5号機 / AT / 擬似ボーナス / ゲーム数解除 / CZ**。
- payout: **97.0 / 98.4 / 100.3 / 105.0 / 111.1 / 119.1%**。
- AT擬似ボーナス初当たり: **1/248.8 / 240.2 / 230.1 / 205.8 / 178.3 / 147.4**。
- CZ「ガチチャンス」: **1/328.2 / 325.0 / 316.7 / 301.0 / 241.1 / 202.9**。
- baseGamesPer50: **約27G/50枚**（後年DB単独値のため `ANALYSIS_SINGLE`）。
- netIncrease: **約3.0枚/G**。
- 「神輿ボーナス」30G完走型、「喧嘩祭ボーナス」20G+JACゲーム（8G×α）。
- 通常A/B/C・天国A/Bの5モード。
- 最大天井: **ボーナス間999G**。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- settingChangeBehavior: 天井G・5モード・内部状態の本機固有直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 通常天井999Gは確定しているが、設定変更時の処理は **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。通常999Gから推定しない。
- modeAfterReset/stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits/resetPenalties: 本機固有の主要公開情報 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: ガックン・液晶ステージ・前兆等を当時攻略/古いDB/回顧資料まで再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL**。一般的5号機挙動による補完はしない。

## safeguards / definitions

- 999Gは通常時最大天井であり、設定変更後専用天井を意味しない。
- 現行KONAMI機や別KPE機のリセット表を喧嘩祭へ混入しない。
- 性能コアはCOMPLETE_COREを維持し、resetBehaviorの未確定は別QA状態PARTIALで管理。

## 2014-04-21群

- 処理済み: **喧嘩祭**。
- 未処理: **マジックモンスター3 ぶっちぎり!魔界グランプリ / 緑ドンVIVA2 / ニューペガサス**。
- status: **GROUP_OPEN**。

## 遡及 resetBehavior QA

- **`docs/real_machine_db/machines/2007-02_skylove.md`** を再QA。
- 既存 `coreStatus: COMPLETE_CORE` は変更なし。
- v0.7の `schemaVersion`、`resetQaLastUpdated: 2026-09-06`、`publicMorningNumbers` を明示し、設定変更/据え置き/電源OFF→ON時のCZ・RT状態について資料系統と検索語を変更して再探索。
- P-WORLD、旧パチマガ/スロマガ、パチ7回顧、古い機種DBまで再確認したが、直接契約を追加固定できなかったため **resetBehaviorQA: PARTIAL** を維持。
- Git履歴でスカイラブ追加直後の次実レコードを追跡し、次のQAカーソルを **`docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`** と確定。

## 次回再開地点

1. **recordCount 811 / chronologicalFrontier 2014-04-21 / 04-21_GROUP_OPEN** から開始。
2. 次の未処理機種は **マジックモンスター3 ぶっちぎり!魔界グランプリ（オリンピア）— 2014-04-21**。
3. その後 **緑ドンVIVA2 → ニューペガサス**。
4. 4機完了後に04/21群をメーカー横断再監査し、漏れがなければGROUP_CLOSED。
5. 遡及resetBehavior QAは **`docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`** から継続。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** の正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-06

### 喧嘩祭
- コナミアミューズメント公式アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2014/kenka/`
- 娯楽産業 当時記事: `https://www.goraku-sangyo.com/kpe%EF%BC%8Fkpe%E3%83%BB%E9%AB%98%E7%A0%82%E8%B2%A9%E5%A3%B2%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E5%96%A7%E5%98%A9%E7%A5%AD%E3%80%8D%E3%83%97%E3%83%AC%E3%82%B9%E8%AA%AC%E6%98%8E%E4%BC%9A/`
- パチビー: `https://www.pachibee.jp/machines/about/214030001`
- pacnk: `https://pacnk.com/slot/2014/kenkamatsuri/top.php`
- すろぱちくえすと（2014-04-22）: `https://www.slopachi-quest.com/article/kanka-matsuri/`
- すろぱちくえすと モード解析（2014-04-27）: `https://www.slopachi-quest.com/article/kenka-zone/`
- みんスロ: `https://minslo.com/%E5%96%A7%E5%98%A9%E7%A5%AD/`
- 中一商事: `https://www.nakaiti.com/html/sKpe080.html`

### 04-21群
- K-Navi 2014年4月新台導入カレンダー: `https://p-kn.com/calendar/201404/`

### 遡及QA
- 再QA済み: `docs/real_machine_db/machines/2007-02_skylove.md`
- 次対象: `docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`
