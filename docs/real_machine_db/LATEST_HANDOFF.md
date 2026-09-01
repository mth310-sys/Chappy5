# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **321 `いみそ～れ2ピュアエディション30`（エマ / 2008-12-08）**。
- バーニングエディション25/30は2008年12月導入までは確認したが、12/08以前・同日と断定できる具体導入日を十分な再探索後も確定できず、直前handoff指示どおり12/08具体日確定群を先に処理。
- 今回 **322 `ぱちスロST ゴジラ`（サミー / 型式ゴジラXS / 2008-12-08）** を追加。
- 性能コア + v0.7 `resetBehavior` を同時収集。設定変更時の内部CZスタートを朝一差として保持し、据え置き/単純電断のカウンタ挙動は推測していない。

## 322. ぱちスロST ゴジラ

- record: `docs/real_machine_db/machines/2008-12-08_pachislo-st-godzilla.md`
- manufacturer: サミー
- modelNumber: **ゴジラXS**
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- releaseDate: **2008-12-08**（ALL7導入予定 + Pachibee導入日で照合）
- generation: 5号機
- systemType: **ボーナス + CZ + 無限RT（次回ボーナスまで）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- BIG: **1/1310.72 / 1/1092.27 / 1/949.80 / 1/840.21 / 1/744.73 / 1/642.51**
- REG: **1/108.15 / 1/109.59 / 1/111.08 / 1/112.60 / 1/114.17 / 1/116.20**
- 合算: **1/99.90 / 1/99.60 / 1/99.45 / 1/99.30 / 1/99.00 / 1/98.40**
- 50枚/1000円ベース: **44.83 / 45.09 / 45.64 / 46.20 / 46.48 / 46.74G**
- BIG: **465枚超払い出しで終了 / 約311枚**
- REG: **27枚超払い出しで終了 / 約24枚**
- CZ `索敵MODE`: 全ボーナス後。通常状態**300G消化**でも移行。特殊リプレイでRT、通常リプレイでCZ終了。
- RT `迎撃MODE`: **約+1.0枚/G**、次回ボーナスまで継続。CZ→RT突入期待度は当時業界資料で**約30%**。
- 通常300Gはボーナス直撃天井ではなく **CZ到達型** として記録。
- `coreStatus: COMPLETE_CORE`

### 機械割CONFLICT（322）

- 市場掲載/後年DB系列: **97.9 / 99.7 / 102.0 / 104.4 / 106.2 / 110.5%**
- パチマガスロマガ・シミュレート: **99.78 / 101.76 / 104.12 / 106.82 / 108.49 / 113.42%**
- 算出条件/定義差の可能性があるため平均化せず `CONFLICT`。
- 後年単一資料にさらに異なる機械割とBIG/REG/RT仕様があるが、当時業界資料・複数解析と大きく矛盾するため `LOW_CONFIDENCE_CONFLICT` としてコア採用しない。

### resetBehavior（322）

- `settingChangeBehavior`: **INTERNAL_CZ_START_CONFIRMED_RETROSPECTIVE**。設定変更時は内部CZスタートと後年DBで確認。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の通常300G→CZカウンタ、CZ/RT状態の持越しを本機固有資料で確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。設定変更なしの電源OFF→ONでのカウンタ/CZ/RT処理は直接資料なし。
- `gameCounterReset`: `UNVERIFIED_EXACT_COUNTER_BEHAVIOR_SETTING_CHANGE_STARTS_INTERNAL_CZ`。設定変更後は通常300G待ちをせず内部CZ開始するが、内部カウンタ初期値自体は未確認。
- `ceilingAfterReset`: **IMMEDIATE_INTERNAL_CZ_START_NOT_NUMERIC_BONUS_CEILING**。
- `modeAfterReset` / `stateAfterReset`: **INTERNAL_CZ_START_CONFIRMED_RETROSPECTIVE**。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: 設定変更後は通常300Gを待たずRT突入契機のCZから開始。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/表示等の本機固有変更判別は再探索後も確定できず。
- 公開朝一数値: 設定変更専用のモード振り分け/朝一当選率/恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。通常CZ→RT期待度約30%は公開値だが「設定変更時専用30%」とは扱わない。

## 322主要出典

取得日: 2026-09-02

- https://www.all7.jp/plans/index/2008/12/10 — ALL7。2008-12-08導入予定、メーカー=サミー。
- https://www.pachibee.jp/machines/movie/217020107 — Pachibee。2008-12-08導入日の照合。
- https://www.p-world.co.jp/machine/database/5389 — P-WORLD。型式ゴジラXS、設定別合算確率。
- https://web-greenbelt.jp/00003914/ — グリーンべると。当時発表、BIG約311枚/REG約24枚、CZ索敵MODE、RT迎撃MODE、CZ→RT約30%、RT約+1枚/G・次回ボーナスまで。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/116/a.php — パチマガスロマガ。基本システム、BIG/REG払い出し条件。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/116/h.php — パチマガスロマガ。設定別BIG/REG/合算、シミュレート機械割。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/116/c.php — パチマガスロマガ。設定別1000円あたりゲーム数44.83～46.74G。
- https://pacnk.com/slot/tools/sh_stgozira.html — 後年DB。市場掲載機械割、通常状態300GでCZ、設定変更時内部CZスタート。
- https://crankyseven.com/sp/tenjo-5ka.htm — 旧解析一覧。通常状態300GでCZの補助照合。
- https://p-kn.com/slot/893/ — K-Navi。BIG/REG払い出し、RT純増の補助照合。

## 321 QAで新規判明

- **`いみそ～れ2ピュアエディション30` の正式型式は `イミソーレ2N-30` と判断できる新規根拠を回収。**
- 2008-11-17東京都公安委員会告示第396号の検定記録にエマ `イミソーレ2N-30` があり、機器対応表が `イミソーレ2ピュアエディション30（イミソーレ2N-30）` と対応付ける。
- 現321レコードは `modelNumber: UNVERIFIED_AFTER_RESEARCH` のままなので、次回QA時に **`イミソーレ2N-30`へ修正可能**。25φの `イミソーレ2H` とは混同しない。
- 根拠: https://p-mans.blogspot.com/2008/11/ （東京都公安委員会検定告示転載） / https://happylibus.com/doc/672417/灰皿フタ機種対応表

## 境界監査・重複防止

- **既存322件の再追加禁止。**
- `いみそ～れ2バーニングエディション25/30` は2008年12月導入は確認済みだが具体導入日未確定。12/08と推測しない。ネオクラッシュモード搭載のためピュア版性能を流用しない。
- 321 pure30 の型式は次回QAで `イミソーレ2N-30` へ修正候補。正式レコード修正前でも、本handoffの新規根拠を失わないこと。

## 次回再開地点

1. **LATEST_HANDOFF基準322件地点 / 2008-12-08同日群。**
2. 次の本線は **`ぱちスロST 行け!稲中卓球部`（サミー）**。既存登録有無を再確認してから、性能コア + v0.7 `resetBehavior` を収集する。
3. 当時グリーンべると同時発表記事で、同機は設定1合算約1/109.8～設定6約1/79.9、中ボーナス約104枚、RT `イタズラタイム` 搭載まで候補値を確認済み。次回は設定別詳細、ベース、RT純増/継続、CZ/天井、リセット挙動を詰める。
4. その後 `ウルトラマン・ザ・スロット` → `カイジ2` → `ハイサイ蝶特急` の12/08群を時系列監査。
5. バーニング25/30の具体導入日が後続調査で12/08以前または同日と確定した場合は漏れ防止のため遡及挿入する。具体日がない限り月精度候補として保持。
6. 各欠損は表記揺れ・型式・メーカー・シリーズ名とリセット関連検索語、資料系統を変えて十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とする。
