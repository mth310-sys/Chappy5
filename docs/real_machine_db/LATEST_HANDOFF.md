# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **344件地点 / 2009-02-22 宇宙刑事ギャバン**。
- 同日群の岡崎産業 **`ラブゲッCHU`** をGitHub既存検索し未収録を確認、**345件目**として追加。
- **既存345件の再追加禁止。**

## 345. ラブゲッCHU

record:
- `docs/real_machine_db/machines/2009-02-22_love-get-chu.md`

要点:
- manufacturer: **岡崎産業**
- releaseDate: **2009-02-22（納品開始予定）**。後年回顧の2/23発売とは物流開始/発売・導入定義差として保持。
- generation: **5号機**
- systemType: **ボーナス+CZ+30G完走型RT / 周期CZ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- PAYOUT: **96.62 / 98.27 / 101.59 / 105.55 / 109.73 / 114.14%**。P-WORLD丸め値とも一致。
- ボーナス合算: **1/251.1 / 1/235.7 / 1/207.4 / 1/194.5 / 1/178.1 / 1/165.5**。
- BIG: **1/851.1 / 1/851.1 / 1/799.2 / 1/712.3 / 1/648.9 / 1/590.4**。
- MID: **1/873.8 / 1/799.2 / 1/736.4 / 1/720.2 / 1/697.2 / 1/642.5**。
- REG: **1/601.2 / 1/550.7 / 1/452.6 / 1/425.6 / 1/378.8 / 1/358.1**。
- 50枚ベース: **38.46 / 38.70 / 38.96 / 39.21 / 39.48 / 39.74G**。
- RT `Sister×sisterS LIVE`: **30G完走型・約+0.6枚/G**。
- 一般紹介の獲得目安はBIG約273枚/MID約185枚/REG約117枚。パチマガスロマガの枚数調整込み値はBIG約312枚/MID約221枚/REG約117枚で定義差として分離。
- 通常150G消化後にCZ。これは周期CZ到達点で、一般的な出玉天井とは区別。
- `coreStatus=COMPLETE_CORE`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **CONFIRMED_CZ_START**。P-WORLDが設定変更後は内部的にCZからスタートと明記。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の150G周期カウンタ、ナビストック、CZ/RT状態の直接資料未確定。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の周期カウンタ、ナビストック、CZ/RT状態の直接資料未確定。
- `gameCounterReset`: **SETTING_CHANGE_CZ_START_CONFIRMED_COUNTER_DETAIL_UNVERIFIED**。設定変更直後CZ開始は確認したが、150G周期内部カウンタ初期化の直接記述は未回収。
- `ceilingAfterReset`: **NOT_APPLICABLE_AS_CONVENTIONAL_CEILING / 150G_PERIODIC_CZ_EXISTS**。リセット専用短縮天井は確認なし。
- `modeAfterReset`: **INTERNAL_CZ_START_CONFIRMED**。
- `stateAfterReset`: **INTERNAL_CHANCE_ZONE_START_CONFIRMED**。RT/ナビストック処理は未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **INTERNAL_CZ_START_CONFIRMED**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/ランプ/150G挙動等の本機固有変更判別資料未確定。
- 公開朝一専用当選率/恩恵率、設定変更時モード振分%は今回確認なし。

### 競合

- グリーンべると本文はボーナス合算を「1/165（設定1）〜1/251（設定6）」と記載するが、P-WORLDとパチマガスロマガは **設定1=1/251.1 → 設定6=1/165.5** で一致。一次記事側の設定ラベル逆転/誤記疑いとして `CONFLICT` 保持し、DB本値は複数一致系列を採用。
- BIG/MID獲得枚数は一般紹介平均値と攻略手順込み獲得値で定義差があるため平均化しない。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00006539/
- https://www.p-world.co.jp/machine/database/5463
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/58/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/58/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/58/a.php
- https://www.pachinkovista.com/pfactory/model.php?dsp=4&nid=17330
- https://slothistory.com/kousin_kako07.html

## 2009-02境界監査

- 2/22 `宇宙刑事ギャバン` は既存344。
- 2/22 `ラブゲッCHU` を今回345として追加。
- 2/22以前の月単位候補 `Wキャッツ / 甘ぴかっ / アイムマジック / がんばれ満月姫! / バケーション / マキシマムインパクト / グレートエンペラーV / ドラキュラ` は具体日未確定のため推測挿入しない。具体日が判明し2/22以前なら正しい位置へ遡及追加する。
- `ダッシュ勝平` と `スーパーリアル麻雀` はGitHub未収録を確認。直前handoffでは2/24導入確認済み候補としているため次群で再確認して進む。
- `バトルアスリーテス大運動会` / `タコスロ7R` は3/1納品予定確認済みで2月へ前倒ししない。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準345件地点。2009-02-22 ラブゲッCHUまで接続済み。既存345件の再追加禁止。**
2. まず2/22同日群の残りと2/23を具体日で最終監査する。
3. 未処理がなければ、既確認候補 **2009-02-24 `ダッシュ勝平` / `スーパーリアル麻雀`** の正式導入日・メーカー・型式・既存有無を再確認し、最古の未処理機から性能コア+v0.7 resetBehaviorを収集する。
4. 同時に2/22以前の月単位候補について具体日探索を継続し、明確に過去位置が確定した場合のみ遡及挿入する。
5. 発表会/内覧会日を導入日と誤認しない。納品・導入・稼働開始の具体根拠を優先する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
7. 一般論や後継機値から推測補完しない。

## コミット（今回）

- 345 ラブゲッCHU: `c2bd053026e7f5487f31a324abb3fb9059091a95`
