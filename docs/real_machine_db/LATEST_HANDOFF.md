# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 179件目 `マスクオブゾロ`（ロデオ、2007-09）までを継承。
- **180件目として `ハイサイネオ`（トロージャン、2007-09本線）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_haisai-neo.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `6d5bdd4cf2dc5fb7991adec8b503ffc328b48213`

## 180. ハイサイネオ

- manufacturer: トロージャン
- formalModel: `UNVERIFIED`
- releaseDate: `2007-09`（2007-08表記とのCONFLICTあり）
- generation: 5号機初期
- systemType: ノーマル / ボーナス主体 / 準完全告知
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- P-WORLDはトロージャン製5号機ノーマル、導入開始2007年09月。
- HAZUSEは2007年9月機として掲載し、ページ作成日は2007-09-06。
- 5号機クロニクルも導入時期2007/9、メーカー「トロージャン」。
- Pachinko Vistaは広島県公安委員会検定通過状況2007-07-05を記録する一方、導入開始を2007年8月と記載。
- 月表記は平均せず `CONFLICT`。3系統が一致する2007-09を本線に置き、2007-08表記もレコードに保持。具体納品日は `UNVERIFIED`。

### 性能コア

- BIG: 345枚を超える払い出しで終了 / 純増約310枚。
- REG: 8回入賞または12G消化で終了 / 純増約104枚。
- HAZUSE、パチマガスロマガ、Pachinko Vista、P-WORLDで約310枚 / 約104枚は一致。
- RT等の付属機能なし。準完全告知型ノーマル。
- 設定別BIG/REG確率、設定別機械割、50枚ベースは表記・検索語・資料系統を変えて再探索したが未確定。
- 特にHAZUSE当時ページはボーナス出現率・内部確率・機械割を「調査中」、5号機クロニクルも機械割を不明としているため、推測値は入れず `UNVERIFIED`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`
- carryOverBehavior: `UNVERIFIED`
- powerCycleBehavior: `UNVERIFIED`
- gameCounterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- stateAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- `ハイサイネオ 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井`、トロージャン併記、BIG/REG/準完全告知併記へ検索語を変更し、P-WORLD、HAZUSE、パチマガスロマガ保存、Pachinko Vista、古いDB/回顧資料を横断したが、本機固有の設定変更/電断処理や変更判別の直接資料は確定できなかった。

## 主要出典

### ハイサイネオ
- HAZUSE: https://www.hazuse.com/i/data/haisaineo/top.htm
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trojan_slot/02/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4852
- Pachinko Vista 基本: https://www.pachinkovista.com/pfactory/model.php?nid=016706&dsp=0
- Pachinko Vista ゲーム性: https://www.pachinkovista.com/pfactory/model.php?nid=16706&dsp=1&gc=0
- 5号機クロニクル（その他メーカー）: https://5goki.com/others

取得日: 2026-09-01

## 9月漏れ監査メモ

- `熊酒場30` は既存 `docs/real_machine_db/machines/2007-09-02_kuma-sakaba-30.md` を確認済み。
- `時空大作戦` は既存 `docs/real_machine_db/machines/2007-09_jikuu-daisakusen.md` を確認済み。
- `春夏秋冬` は最新main検索で独立レコードを確認できず、9月残候補として継続監査する。

## 次回再開地点

1. **LATEST_HANDOFF基準180件地点から継続。** 次候補は `学習パチスロ国語`。既存レコード有無を再確認し、未処理なら性能コア＋v0.7 resetBehaviorを収集する。
2. その後、2007年9月残候補の `春夏秋冬` を優先監査。導入時期を高信頼資料で確定できれば時系列を崩さず差し込む。
3. 9月を閉じる前に月精度候補一覧を再監査し、未処理漏れがないことを確認する。
4. 2007年9月を閉じた後に2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
5. resetBehavior遡及QAは、新規収集を止めず、2006年5月以降でresetBehavior未収集の最古既存機を最新mainから再確認して順次補完する。
6. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
