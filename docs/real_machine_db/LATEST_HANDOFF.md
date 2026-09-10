更新日: 2026-09-11

## 現在地点
- recordCount: **1282**
- latestRecordAdded: **ジャングルマスターコングダム**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-05-07_jungle-master-kongdom.md`
- chronologicalFrontier: **2019-05-07**
- frontierLatestMachine: **ジャングルマスターコングダム — No.1282**
- schema: **resetBehavior v0.7**
- status: **2019-05-07_GROUP_OPEN_1_OF_AT_LEAST_2_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1281を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoff指定の2019-05-07群先頭 `ジャングルマスターコングダム` をNo.1282として性能コア + resetBehavior v0.7で登録。
- 娯楽産業 / HAZUSE / P-WORLD / パチマガスロマガ / すろぱちくえすと / スロパチネット / モゲスロ等を横断。導入日2019-05-07、山佐、型式 `ジャングルマスターコングダム／CC`、machine_code/検定番号 `7S1352`、A+RT、設定別スペック、RT仕様を照合。
- BIG/REG獲得枚数は当時複数資料が最大300枚/84枚で一致。一方、後年5号機回顧DBに155枚/40枚表記があり `CONFLICT_RETROSPECTIVE_PAYOUT_155_40_VS_CONTEMPORARY_300_84` として保持。canonicalは当時複数資料一致を採用。
- resetBehaviorは設定変更/据え置き/純電断/ガックン等へ検索語を変えたが、本機固有のRT内部状態契約を直接固定できず `PARTIAL_RESEARCH_EXHAUSTED`。一般5.9号機/A+RT挙動から推測して埋めていない。
- 2019-05-07群は少なくともジャングルマスターコングダム / パチスロ ボンバーパワフルIIIの2機。群は未CLOSE。

## No.1282 — ジャングルマスターコングダム
- manufacturer: **山佐**
- formalModel: **`ジャングルマスターコングダム／CC`**
- certificationNumber: **`7S1352`**
- generation/system: **5.9号機 / A+RT / 技術介入 / 4段階設定**
- releaseDate: **2019-05-07**
- settings: **1 / 2 / 5 / 6**
- 機械割: **97.3 / 100.2 / 105.1 / 108.5%**
- BIG: **1/300.6 / 1/291.3 / 1/283.7 / 1/271.9**
- REG: **1/374.5 / 1/337.8 / 1/299.3 / 1/273.1**
- 合算: **1/166.8 / 1/156.4 / 1/145.6 / 1/136.2**
- baseGamesPer50: **約34〜35G**
- BIG: **最大300枚** / REG: **最大84枚**
- RT: BIG後20G「ナイトモード」→特殊リプレイで100G or 999G「ジャングルタイム」
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 本機固有の設定変更時RT状態/成立済みボーナス状態/テトラリール初期状態契約は `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置き単独条件でRT残りG・内部RT状態を明記した直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- powerCycle: 純電源OFF→ONのみのRT残りG・内部RT状態・テトラ表示/状態契約は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常ゲーム数天井なしのため天井カウンタはN/A。RT残りGの変更/電断契約は未固定。
- ceilingAfterReset: 天井非搭載、リセット専用短縮天井N/A。
- mode/stateAfterReset: 朝一専用通常モード/設定変更時モード振り分けは確認なし。RT状態の3条件別契約は未固定。
- advantageousSectionReset: 朝一判別に使える本機固有の有利区間ランプ/区間契約は固定できず、一般論から補完しない。
- resetBenefits: リセット専用短縮天井、朝一ボーナス/CZ優遇、専用RT付与は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: テトラリールに始動/逆回転/バウンド系演出があり、朝一実戦記でガックンと誤認した記録あり。ただし設定変更時メインリールガックンの本機固有確定条件/率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 設定変更時のみの公開朝一数値は `PUBLIC_NUMERIC_RESET_DATA_NOT_FOUND_AFTER_RESEARCH`。

## qualityNotes / conflicts
- 導入日はHAZUSE / 解析サイト / 2019導入カレンダーで **2019-05-07** 一致。
- 型式 `ジャングルマスターコングダム／CC` は複数資料一致。HAZUSE machine_code `7S1352` を検定番号として保持。
- 50枚ベースは約34G / 34.8G / 35Gで、丸め精度差として約34〜35Gをcanonical。
- BIG/REGは当時業界記事・P-WORLD・パチマガスロマガ・当時解析が最大300/84枚で一致。後年5号機クロニクルの155/40枚はCONFLICTとして別保持。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_playboy-30.md`**
- pendingFormalization: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- NOTE: 直前runでピカスロ固有の設定変更/据え置き/純電断契約は検索枯渇確認済みだが、ファイルへの `PARTIAL_RESEARCH_EXHAUSTED` 正式保存が未実施。次回、前進キューを止めない範囲で正式保存してから次のQAレコードへ進める。

## 2019-05-07群 — OPEN
### 登録済み
- No.1282 ジャングルマスターコングダム

### 未処理確定候補
1. **パチスロ ボンバーパワフルIII** — SANKYO — 6号機AT

### 群監査
- モゲスロ2019導入カレンダー等で5/7にジャングルマスターコングダムとボンバーパワフルIIIを確認。
- 次回、K-Navi月間カレンダー/当時導入一覧/メーカー系資料で全メーカー・別型式・別スペック・PB・地域差を再監査し、ボンバーパワフルIII登録後にCLOSED可否を判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1282を再取得。
2. 2019-05-07群を再監査し、**パチスロ ボンバーパワフルIIIをNo.1283候補**として性能コア + resetBehavior v0.7で処理。
3. 5/7同日全メーカー/別型式/別スペック/PB/地域差を監査し、群CLOSED可否を判定。
4. 遡及QAは `2007-02_pikaslo.md` の検索枯渇結果を正式保存してから次レコードへ進める。

## 主要出典 — 取得日 2026-09-11
### ジャングルマスターコングダム
- 娯楽産業: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%B3%E3%82%B0%E3%83%80%E3%83%A0%E3%80%8D/
- HAZUSE: https://data.hazuse.com/?genre=209&machine_code=7S1352
- P-WORLD: https://www.p-world.co.jp/machine/database/8901
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/232/a.php
- パチマガスロマガ RT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/232/01-1.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/jungle-master-kongdom/
- スロパチネット: https://slopachi-net.com/kongdom
- モゲスロ: https://moge-site.com/archives/21990
- モゲスロ2019導入カレンダー: https://moge-site.com/new-slot2019
- ぱちんこキュレーション: https://pachinko-curation.com/1052/
- 5号機クロニクル: https://5goki.com/yamasa
- にくじる: https://www.nikuziru.com/archives/3926
