# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **315 `パンダーゼット`（ラスター / 2008-11、2008-11-14までの実稼働痕跡あり）**。
- 今回 **316 `海遊記`（ベルコ / 型式カイユウキY）** を追加。
- ベルコ公式は5号機版を **2008年11月登場**、5号機ARTと明記。P-WORLD当該5号機ページの「導入開始 2000年07月」はベルコ公式の旧4号機版 `海遊記` の登場月と一致するため、旧作との混線として採用しない。
- 全国納品開始/ホール導入の具体日は、表記揺れ・型式・メーカー・11月の具体日を変えて再探索したが確定できず、月精度 `2008-11` のまま保存。
- 性能コア + v0.7 `resetBehavior` を同時収集。設定別3種ボーナス確率、合算、機械割CONFLICT、基本獲得、ART/CZ構造を保存。

## 316. 海遊記（2008年5号機）

- record: `docs/real_machine_db/machines/2008-11_kaiyuki-2008.md`
- manufacturer: ベルコ
- modelNumber: `カイユウキY`
- inspectionNumber: `8S0694`
- releaseDate: **2008-11（月精度 / メーカー公式）**。
- generation: 5号機
- systemType: ボーナス + CZ + ART
- BIG: **1/1489.45 / 1/1365.33 / 1/1260.31 / 1/1170.29 / 1/1092.27 / 1/1489.45**。
- カニBONUS: **1/282.48 / 1/327.68 / 1/260.06 / 1/321.25 / 1/256.00 / 1/230.76**。
- カメBONUS: **1/327.68 / 1/268.59 / 1/327.68 / 1/256.00 / 1/315.08 / 1/230.76**。
- ボーナス合算: **1/137.68 / 1/133.20 / 1/130.03 / 1/127.01 / 1/125.07 / 1/107.08**。
- BIG純増: **約384枚**。
- カニ/カメBONUS純増: **各約108枚**。
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`。
- ART純増/G: `UNVERIFIED_AFTER_RESEARCH`。
- メーカー公式: 通常時は演出の異なる2モード、ART突入率の異なる3種類ボーナス。
- 後年実機回顧資料: 100G消化または次回ボーナス成立まで継続する2種類ARTの存在を補助確認。
- `coreStatus: PARTIAL`。

### 機械割CONFLICT（316）

- パチマガスロマガ シミュレート: **99.25 / 101.53 / 103.74 / 106.61 / 109.71 / 113.45%**。
- 5号機クロニクル: **98.8 / 100.9 / 102.9 / 105.5 / 108.3 / 111.6%**。
- 全設定で差があるため平均せず `CONFLICT` として両系列を保存。

### resetBehavior（316）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。海遊記/カイユウキY/ベルコ/5号機と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「CZ」「ART」「100G」「天井」「ガックン」を組み替え、メーカー公式、P-WORLD、パチマガスロマガ、5号機クロニクル、当時/回顧資料を横断したが、本機固有の設定変更処理を直接確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。CZ/ART状態・ART残Gの据え置き引継ぎを直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみでのCZ/ART状態・残G処理を直接確定できず。
- `gameCounterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。通常ゲーム数到達型天井を確認できず。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。リセット専用短縮天井を確認できず。
- `modeAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。内部モードの再抽選/引継ぎ、朝一専用モードを直接確認できず。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。CZ/ART内部状態の変更・電断処理は未確定。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/表示等の本機固有変更判別を回収できず。
- `numericResetData`: リセット固有の短縮天井・モード振り分け・朝一当選率・恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 316主要出典

取得日: 2026-09-02

- https://www.s-bellco.co.jp/products/slot/kaiyuki_2008/ — ベルコ公式。2008年11月登場、5号機ART、通常時2モード、3種類ボーナス。
- https://www.s-bellco.co.jp/products/slot/kaiyuki/ — ベルコ公式旧4号機版。2000年7月登場。P-WORLD日付混線の切り分けに使用。
- https://www.p-world.co.jp/machine/database/5351 — 型式カイユウキY、検定8S0694、5号機ART、規定払い出し。2000年07月表示は旧作混線のため導入日には不使用。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/83/a.php — ART/CZ、BIG約384枚、カニ/カメ約108枚。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/83/h.php — 設定別3種ボーナス、合算、PAYOUT 99.25〜113.45%。
- https://5goki.com/bellco — 2008年11月、機械割98.8〜111.6%の別系列。
- https://www.youtube.com/watch?v=ROySDhrla8c — 後年実機回顧。100G/次回ボーナス型2種類ARTの補助確認。純増値には不使用。

## 境界監査・重複防止

- **既存316件の再追加禁止。**
- `海遊記` は2000年4号機版と2008年5号機版を混同しない。今回レコードは **2008年5号機 / カイユウキY** 専用。
- 11月同月精度機は具体日未確定のため、番号は調査処理順。後から全国納品開始日が判明した場合は時系列メタデータを修正するがレコード重複追加はしない。
- `モンキーモンキー` はGitHub既存検索で未収録。ベルコ公式2008年11月群に存在し、当時系資料には **ヤーマ「モンキーモンキー3」納品開始2008-11-24** の記録がある。ベルコ/ヤーマのメーカー表記・正式型式・同一機種性を確認して次キューで処理する。
- `ぱちスロSTゴジラ` / `ぱちスロST行け!稲中卓球部` は2008-12-08候補、`HAIBいちろう` は2008-12-15候補として11月列へ混入させない。

## 次回再開地点

1. **LATEST_HANDOFF基準316件地点。まず `モンキーモンキー` / `モンキーモンキー3` のベルコ・ヤーマ表記と正式型式を照合し、2008-11-24納品開始資料との同一性を確定する。**
2. 同一機種と確定した場合は性能コア + v0.7 resetBehaviorを収集して317件目へ。別型式/別機なら混同せず各機を時系列で分離する。
3. 続いて `ハネスロナイツ` / `バックトゥザフューチャーデラックス` 等の11月境界候補を監査し、11月を閉じて2008年12月へ進む。
4. resetBehavior遡及QAは別QAリレーで継続し、新規収集の進行を止めない。
