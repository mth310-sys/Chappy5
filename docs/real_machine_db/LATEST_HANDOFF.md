# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **323 `ぱちスロST 行け!稲中卓球部`（サミー / 2008-12-08）**。
- 今回 **324 `ウルトラマン・ザ・スロット`（山佐 / 2008-12-08）** を追加。
- **既存324件の再追加禁止。**

## 324. ウルトラマン・ザ・スロット

- record: `docs/real_machine_db/machines/2008-12-08_ultraman-the-slot.md`
- manufacturer: 山佐
- releaseDate: **2008-12-08**（ALL7導入予定。山佐公式は2008年12月稼働、当時グリーンべるとは12/7納品開始予定）
- modelNumber: **パチスロウルトラマンF**
- inspectionNumber: **8S0890**
- generation: 5号機
- systemType: **A+ART（ボーナス + CZ + 押し順ナビART）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 赤7BIG: **1/590.41 / 1/1170.29 / 1/564.97 / 1/1110.78 / 1/528.52 / 1/1057.03**
- 青7BIG: **1/1191.56 / 1/574.88 / 1/1129.93 / 1/546.13 / 1/1074.36 / 1/504.12**
- BIG合算: **1/394.80 / 1/385.51 / 1/376.64 / 1/366.12 / 1/354.25 / 1/341.33**
- REG: **1/728.18 / 1/720.18 / 1/712.35 / 1/704.69 / 1/697.19 / 1/689.85**
- ボーナス合算: **1/256.00 / 1/251.10 / 1/246.38 / 1/240.94 / 1/234.90 / 1/228.35**
- 50枚/1000円ベース: **31.00 / 31.20 / 31.40 / 31.60 / 31.80 / 32.00G**
- 基本獲得: 赤7BIG平均約**259枚**、青7BIG平均約**253枚**、REG約**56枚**。パチマガスロマガはBIG約250枚の総括表現。
- ART `ウルトラモード`: **40G/セット、約+1.0枚/G**。必勝本解析では設定別約**+1.03～+1.06枚/G**。
- CZ `ウルトラ作戦`: ボーナス後/ART終了後に移行。ナビなしでも6択正解でART、解析上約**16.7%（1/6）**。
- 天井: **CZ/ARTを除く通常時978G**で到達し、ボーナス成立までART/CZをループ。ボーナス間総Gではなく通常時Gカウンタ。
- `coreStatus: COMPLETE_CORE`

### 機械割CONFLICT（324）

- 市場掲載系列: **96.9 / 99.0 / 101.3 / 103.7 / 106.9 / 110.1%**
- パチマガスロマガ・シミュレート: **96.43 / 98.35 / 101.07 / 103.34 / 106.91 / 110.26%**
- 算出条件差の可能性があるため平均化せず `CONFLICT`。

### resetBehavior（324）

- `settingChangeBehavior`: **PARTIALLY_CONFIRMED**。設定変更後も天井までの通常時ゲーム数を引き継ぐ資料あり。ナビポイント/CZ/ART・RT/高確等の内部状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- `carryOverBehavior`: **PARTIALLY_CONFIRMED**。天井は宵越し可能。ナビポイント/CZ/ART・内部状態の据え置き時引継ぎは `UNVERIFIED_AFTER_RESEARCH`。
- `powerCycleBehavior`: **PARTIALLY_CONFIRMED**。前日→翌日の天井宵越しは攻略資料で支持。電源OFF→ONのみのCZ/ART/ナビポイント/内部状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- `gameCounterReset`: **CARRY_OVER**。設定変更後も通常時978G天井までのゲーム数を引継ぎ。
- `ceilingAfterReset`: **978G_CARRY_OVER_NO_SHORTENING_CONFIRMED**。リセット専用短縮天井は確認されない。
- `modeAfterReset` / `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: 前日ハマリの宵越し天井狙いが成立し得る。設定変更限定の追加恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/表示/朝一挙動を機種名・型式名・山佐と組み替えて再探索したが確定手段なし。
- 公開朝一数値: 設定変更専用モード振り分け、朝一当選率、恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 324主要出典

取得日: 2026-09-02

- https://yamasa-next.co.jp/model_umt/ — 山佐公式。5号機/A+ART、2008年12月稼働、ナビポイント/CZ/ART構造。
- https://web-greenbelt.jp/00003903/ — グリーンべると。当時発表、12/7納品開始予定、ART40G・約+1.0枚/G、赤7約259枚・青7約253枚・REG約56枚。
- https://www.all7.jp/plans/index/2008/12/10 — ALL7。2008-12-08導入予定。
- https://www.p-world.co.jp/machine/database/5383 — P-WORLD。型式名、検定番号、市場掲載機械割、ボーナス純増、ART、通常時978G天井。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/160/a.php — パチマガスロマガ。ART/CZ/天井CZ、BIG約250枚・REG約56枚。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/160/h.php — パチマガスロマガ。設定別ボーナス確率、シミュレート機械割。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/160/c.php — パチマガスロマガ。設定別1000円あたり31.00～32.00G。
- https://p.hisshobon.jp/machine/1268/1/19132 — パチ＆スロ必勝本。CZ/ART詳細、ナビなしART突入16.7%、設定別ART純増。
- https://p.hisshobon.jp/machine/1268/1/19484 — パチ＆スロ必勝本。CZ/ARTを除く通常時978G天井のカウンタ定義。
- https://p-kn.com/slot/897/ — K-Navi。天井搭載・宵越し可能の補助確認。
- https://pacnk.com/slot/tools/sh_urutoraman.html — pacnk。設定変更後も天井までのゲーム数を引き継ぐ旨、市場掲載数値の補助照合。

## 境界監査・重複防止

- **既存324件の再追加禁止。**
- `いみそ～れ2バーニングエディション25/30` は2008年12月導入までは確認済みだが、12/08以前・同日と断定できる具体導入日未確定。具体日が確定するまでピュア版性能を流用せず月精度候補として保持。
- 2008-12-08同日群はALL7で `カイジ2`、`ハイサイ蝶特急` が未処理本線候補として残る。
- 山佐公式の稼働時期は月精度。当時グリーンべるとの12/7は納品開始予定、ALL7の12/8は導入予定なので、本DB主日付はホール導入予定の12/8を採用し定義差を注記する。

## 次回再開地点

1. **LATEST_HANDOFF基準324件地点 / 2008-12-08同日群。**
2. 次の本線は **`カイジ2`（ロデオ）**。既存登録有無を再確認してから、性能コア + v0.7 `resetBehavior` を収集する。
3. その後 **`ハイサイ蝶特急`（タイヨー）** を処理し、12/08群を閉じる。
4. 12/08群処理中も、それ以前/同日に漏れた機種が具体導入日付きで見つかれば遡及挿入する。
5. `いみそ～れ2バーニングエディション25/30` の具体導入日が12/08以前または同日と確定した場合は漏れ防止のため遡及追加する。
6. 各欠損は表記揺れ・型式・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を含む検索語・資料系統を変えて十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とする。
