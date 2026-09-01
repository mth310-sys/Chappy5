# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **322 `ぱちスロST ゴジラ`（サミー / 2008-12-08）**。
- 今回 **323 `ぱちスロST 行け!稲中卓球部`（サミー / 2008-12-08）** を追加。
- **既存323件の再追加禁止。**

## 323. ぱちスロST 行け!稲中卓球部

- record: `docs/real_machine_db/machines/2008-12-08_pachislo-st-ike-inachu-takkyubu.md`
- manufacturer: サミー
- releaseDate: **2008-12-08**（ALL7 + Pachibeeで照合。当時グリーンべるとは12/7納品開始予定）
- generation: 5号機
- systemType: **ボーナス + RT（ぱちスロST / 1ライン）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- MB+RT: **1/218.45 / 1/202.90 / 1/186.18 / 1/177.12 / 1/165.49 / 1/152.41**
- MB: **1/220.66 / 1/203.53 / 1/218.45 / 1/178.09 / 1/220.66 / 1/168.04**
- 合算: **1/109.78 / 1/101.61 / 1/100.52 / 1/88.80 / 1/94.57 / 1/79.92**
- 50枚/1000円ベース: **34.47 / 34.46 / 35.19 / 35.44 / 35.40 / 36.43G**
- MB: **144枚超払い出しで終了 / 約102枚**。当時グリーンべるとは約104枚のため丸め/定義差CONFLICTとして保持。
- RT `イタズラタイム`: **約+0.5枚/G、平均約40G**。液晶7揃いボーナス後またはペーポーチャンス成功で突入し、特殊リプレイ入賞まで継続。グリーンべるとではボーナス当選も終了条件として説明。
- 通常ゲーム数天井/救済RT: 十分な再探索後も機種固有根拠を確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- `coreStatus: COMPLETE_CORE`

### 機械割CONFLICT（323）

- 市場掲載/Pachibee/P-WORLD/2008年更新wiki系列: **97.5 / 99.5 / 102.5 / 105.0 / 106.5 / 110.0%**
- パチマガスロマガ・シミュレート: **97.29 / 99.63 / 103.28 / 106.07 / 108.09 / 111.85%**
- 算出条件差の可能性があるため平均化せず `CONFLICT`。

### resetBehavior（323）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。設定変更時のRT/内部状態処理を本機固有資料で確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。据え置き時のRT/内部状態引継ぎを直接確認できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。設定変更なしの電源OFF→ONのみの処理は直接資料なし。
- `gameCounterReset`: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。通常ゲーム数天井/救済カウンタ自体を確認できず。
- `ceilingAfterReset`: `NOT_APPLICABLE_NO_NUMERIC_CEILING_CONFIRMED`。リセット専用短縮天井/朝一天井数値は確認できず。
- `modeAfterReset` / `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: 設定変更限定の公開恩恵/不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/表示/朝一挙動等を、機種名表記揺れ・サミー・ぱちスロSTと組み替えて再探索したが確定手段なし。
- 公開朝一数値: 設定変更専用モード振り分け、朝一当選率、恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 323主要出典

取得日: 2026-09-02

- https://www.sammy.co.jp/japanese/products/pachislot/2008/index.html — サミー公式。機種存在・製品名。
- https://www.all7.jp/plans/index/2008/12/10 — ALL7。2008-12-08導入予定。
- https://www.pachibee.jp/machines/index/211040015 — Pachibee。2008-12-08導入、設定別合算、市場掲載機械割、MB約102枚、RT約+0.5枚/G・平均約40G。
- https://web-greenbelt.jp/00003914/ — グリーンべると。当時発表、MB約104枚、合算端値、RT構造・約+0.5枚/G、12/7納品開始予定。
- https://p-kn.com/topics/exhibition/399/ — K-Navi。2008-11-06内覧会、12月上旬導入予定、大当たり端値、RT平均約40G。
- https://www.p-world.co.jp/machine/database/5388 — P-WORLD。設定別MB+RT/MB/合算、市場掲載機械割、144枚超/約102枚、RT構造。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/115/a.php — パチマガスロマガ。RT/1ライン、約102枚。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/115/h.php — パチマガスロマガ。設定別ボーナス確率、シミュレート機械割。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/115/c.php — パチマガスロマガ。設定別1000円あたり34.47～36.43G。
- https://w.atwiki.jp/5gouki/pages/135.html — 2008年更新5号機wiki。設定別確率/市場掲載機械割の補助照合。

## 境界監査・重複防止

- **既存323件の再追加禁止。**
- `いみそ～れ2バーニングエディション25/30` は2008年12月導入までは確認済みだが、12/08以前・同日と断定できる具体導入日未確定。具体日が確定するまでピュア版性能を流用せず月精度候補として保持。
- サミー公式2008年製品一覧の日付はページ内製品管理上の表示であり、ホール導入日として直接採用しない。導入日は業界導入予定/機種DBで照合する。

## 次回再開地点

1. **LATEST_HANDOFF基準323件地点 / 2008-12-08同日群。**
2. 次の本線は **`ウルトラマン・ザ・スロット`（山佐）**。既存登録有無を再確認してから、性能コア + v0.7 `resetBehavior` を収集する。
3. その後 **`カイジ2`（ロデオ） → `ハイサイ蝶特急`（タイヨー）** の12/08群を時系列監査する。
4. 12/08群処理中も、それ以前/同日に漏れた機種が具体導入日付きで見つかれば遡及挿入する。
5. `いみそ～れ2バーニングエディション25/30` の具体導入日が12/08以前または同日と確定した場合は漏れ防止のため遡及追加する。
6. 各欠損は表記揺れ・型式・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を含む検索語・資料系統を変えて十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とする。
