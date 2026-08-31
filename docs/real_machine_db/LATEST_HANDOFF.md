# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 174件目 `バリバリ伝説`（平和、2007-09-09）までを継承。
- 2007年9月残候補を再監査したところ、当時業者向け「スロット新台一覧」保存資料に `熊酒場-30` の納品開始 `9/2` が残っていることを確認。時系列漏れ防止のため9/9より前へ遡及して優先処理。
- **175件目として `熊酒場-30`（ネット、2007-09-02）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-02_kuma-sakaba-30.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `1ca1cea8a8e319e7a2a0b902f661d1303ea79680`

## 175. 熊酒場-30

- manufacturer: ネット
- releaseDate: `2007-09-02`
- generation: 5号機初期
- systemType: ノーマル / 完全告知 / プチRT / 30Φ
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- K-Navi 2007-07-25当時記事でネットの30Φ版として発売決定、ホールデビューは「9月上旬予定」と明記。
- P-WORLDは型式名 `クマサカバX1-30`、導入開始2007年9月、30Φとして掲載。
- 当時業者向け新台一覧保存資料にネット `熊酒場-30` の納品開始 `9/2` が掲載されているため、本DBでは具体日 `2007-09-02` を採用。
- パチマガスロマガは25Φ版とは内部確率が若干異なると明記しており、30Φ派生を独立スペックとして扱う。

### 性能コア

| 設定 | BIG合成 | REG | 全ボーナス合成 | パチマガPAYOUT | K-Navi機械割 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/277.69 | 1/451.97 | 1/172.01 | 97.81% | 98.8% |
| 3 | 1/264.26 | 1/425.56 | 1/163.02 | 100.21% | 100.2% |
| 5 | 1/250.14 | 1/402.06 | 1/154.20 | 104.71% | 104.5% |
| 7 | 1/239.18 | 1/381.02 | 1/146.94 | 108.96% | 108.4% |

- 赤7BIG/BAR BIGは同確率。設定1 `1/555.39` → 設定7 `1/478.36`。
- K-Naviは設定7 BIGを `1/235` としておりパチマガ `1/239.18` と差があるため `CONFLICT`。
- 機械割も両資料に差があるため平均せず `CONFLICT` 保持。
- 50枚ベース: 設定1/3/5/7 `34.94 / 34.95 / 36.34 / 37.86G`。
- BIG: 345枚超払い出し終了、純増312枚。
- REG: 134枚超払い出し終了、純増117枚。
- 基本システムはノーマル/プチRT/同時成立あり。プチRTの比較可能な純増/G・継続G数は十分再探索後も確定できず `UNVERIFIED`。

### v0.7 resetBehavior

- settingChangeBehavior: `NONE_CONFIRMED / PARTIAL`。パチマガスロマガの「攻め時・ヤメ時・設定変更時→特にナシ」を確認。変更専用恩恵/短縮天井等は確認されないが、内部プチRT状態の厳密処理は未確認。
- carryOverBehavior: `UNVERIFIED`。据え置き時の内部プチRT状態処理を直接確定できず。
- powerCycleBehavior: `UNVERIFIED`。電源OFF→ONのみの場合の内部状態処理を直接確定できず。
- gameCounterReset: `NOT_APPLICABLE / NONE_CONFIRMED`。通常時ゲーム数天井は確認されない。
- ceilingAfterReset: `NONE_CONFIRMED`。
- modeAfterReset: `NONE_CONFIRMED`。朝一専用モード/変更時専用モード振り分けは確認されない。
- stateAfterReset: `UNVERIFIED`。プチRT中の変更・据え置き・電断時残状態処理は未確認。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: `UNVERIFIED`。本機固有ガックン・初期出目・扉/ランプ等での変更判別を確定できず。
- numericResetData: `NONE_CONFIRMED`。

### 再探索実施

`熊酒場-30 / 熊酒場30 / クマサカバX1-30 / ネット / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / プチRT / 天井 / 30Φ` を組み替え、K-Navi、P-WORLD、パチマガスロマガ、旧DB、後年回顧、当時業者向け資料まで横断。性能コアは比較可能な主要値を取得。リセット特性は「設定変更時→特にナシ」までは確認できたが、内部プチRT状態の具体的引継ぎ/初期化と変更判別は直接資料がなく推測しない。

## 主要出典

### 熊酒場-30
- K-Navi 発売決定記事（2007-07-25）: https://p-kn.com/topics/news/287/
- K-Navi 機種情報: https://p-kn.com/slot/569/
- P-WORLD: https://www.p-world.co.jp/machine/database/4851
- パチマガスロマガ ボーナス確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/135/h.php
- パチマガスロマガ 1000円G数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/135/c.php
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/135/a.php
- パチマガスロマガ 機種メニュー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/135/net_slot_135.php
- 当時業者向けスロット新台一覧保存資料: https://paperzz.com/doc/5762410/%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準175件地点から継続。2007年9月残候補のうち、2007-09-09以前に具体納品日が出る未処理機がないか再監査する。**
2. 残候補: `サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬`。`熊酒場30` は今回処理済み。
3. `春夏秋冬` はグリーンべると当時記事で納品予定 `2007-09-24` を確認済み。
4. `サザンドリーム` はP-WORLD/パチマガ/5号機クロニクルで2007年9月、P-WORLD掲示板では9/27に実打報告がある。具体納品日は未確定なので引き続き再探索。
5. `ザ・ドゥーナッツのトンdeピース` は2007年9月導入、10月2日に都内ホールでイベント実施の業界記録あり。具体納品日は引き続き監査。
6. 当時業者向け新台一覧は時系列漏れ発見に有効だったため、残候補名を個別に照合し、9/2〜9/9間またはそれ以前の具体日がないか優先確認する。
7. 2007年9月漏れ監査完了後に2007年10月へ進む。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
8. resetBehavior遡及QAは既補完機を重複改変せず、最新main上の未補完最古機から続行する。
9. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
