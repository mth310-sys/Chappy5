# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 165件目 `時空大作戦`（岡崎産業、2007-09・具体日UNVERIFIED）までの時系列進捗を継承。
- 今回、9月残候補のうちユニバーサル公式で2007年9月発売が確定している `ちょいスゴ!!アリババインファンタジア` を再監査。
- 具体ホール導入日は、表記揺れ・メーカー・当時記事・旧DBを変えて十分再探索したが日単位で確定できなかったため推測しない。
- **166件目として `ちょいスゴ!!アリババインファンタジア`（エレコ、2007-09・具体日UNVERIFIED）を月精度の遡及レコードとして登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_choisugo-alibaba-in-fantasia.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `210713e29b849690282780a0e60287f51fbab210`
- resetBehavior遡及QAは `ロックユークイーン3` の次の `スーパーお父さん`（2006-04）まで前進。
- `スーパーお父さん` の既存性能コア完了判定は崩さず、resetBehaviorのみ補完。QA commit: `9e867d237ac4f6b4641fb62da83146dbc9f15fe6`。

## 166. ちょいスゴ!!アリババインファンタジア

- manufacturer: エレコ / ユニバーサル系
- releaseDate: `2007-09`（具体導入日UNVERIFIED）
- generation: 5号機
- systemType: ボーナス + 天井RT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

パチマガスロマガ解析。赤7BIG・モルジアナBIG・REGは各設定で同一確率。

| 設定 | 各ボーナス | 合算 | 機械割 | 1000円G数 | 天井RT純増 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/682.67 | 1/227.56 | 98.71% | 39.01G | +0.09枚/G |
| 4 | 1/630.15 | 1/210.05 | 102.90% | 39.65G | +0.11枚/G |
| 6 | 1/585.14 | 1/195.05 | 106.74% | 40.14G | +0.12枚/G |
| H | 1/541.62 | 1/180.54 | 111.32% | 40.89G | +0.13枚/G |

- BIG: 345枚超払い出しで終了、純増約312枚。
- アリババチャンス/REG: 253枚超払い出しで終了、純増約221枚。
- メーカー公式と解析値で獲得目安一致。
- BIG後1200G、アリババチャンス後1000Gで天井RT `アリババゾーン` へ突入し、次回ボーナスまで継続。
- メーカー公式で2007年9月発売、ボーナス+RTを確認。
- ボーナス確率はパチマガスロマガとHAZUSEで一致。

### v0.7 resetBehavior

`ちょいスゴ!!アリババインファンタジア / アリババインファンタジア / エレコ / アルゼ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1200G / 1000G / アリババゾーン / RT / ガックン` を組み替え、メーカー公式・当時解析・旧DB・後年資料まで再探索。

- 設定変更時のBIG後1200G / REG後1000G天井RT進行ゲーム数リセット/引継ぎ: `UNVERIFIED`
- 据え置き時の天井RTゲーム数・RT状態引継ぎ: `UNVERIFIED`
- 電源OFF→ON時の天井RTゲーム数・RT状態処理: `UNVERIFIED`
- 設定変更時のアリババゾーン内部状態処理: `UNVERIFIED`
- リセット専用短縮天井: `NONE_CONFIRMED`
- 朝一専用モード/設定変更専用モード: `NONE_CONFIRMED`
- 設定変更専用恩恵/不利、公開朝一数値: `NONE_CONFIRMED`
- 本機固有のガックン・出目・液晶等による変更判別: 十分再探索後も `UNVERIFIED`
- 有利区間: `NOT_APPLICABLE`

## resetBehavior 遡及QA — スーパーお父さん

既存性能コアは維持し、リセット特性のみv0.7で補完。

### 今回確定できた事項

- HAZUSE当時解析: **設定変更後は必ず内部BC抽選状態（CZ）からスタート。**
- パチ7の元攻略誌ライターによる当時実戦回顧でも、**設定変更後はボーナス後と同様CZスタート**と一致。
- 設定変更後CZでも液晶上は通常時と変わらず、外見だけでは直接見抜けない。
- CZでチェリーより先にベルを引いて30G RT `バトルチャンス` へ入れば、設定変更を推測する材料になる。
- チェリーを先に引いた場合は通常状態へ転落するため、その手順だけでは変更/据え置き判別不能。
- 設定変更後CZ開始は当時解析の「必ず」表記に基づき100%としてnumericResetDataへ記録。

### 未確定のまま保持

- 据え置き時のCZ/BC状態・BC残G引継ぎ: `UNVERIFIED`
- 電源OFF→ON時のCZ/BC状態・BC残G処理: `UNVERIFIED`
- 本機固有リールガックンの有無: `UNVERIFIED`
- 通常時ゲーム数天井/リセット専用短縮天井: `NONE_CONFIRMED`
- 有利区間: `NOT_APPLICABLE`

resetBehaviorQAは、確定事項が増えたが電断/据え置き等が残るため `PARTIAL` 維持。

## 今回主要出典

### ちょいスゴ!!アリババインファンタジア
- ユニバーサル公式製品: https://www.universal-777.com/product/slot/alibabainfantasia/
- ユニバーサル公式2007年一覧: https://www.universal-777.com/product/slot/2007/
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/71/h.php
- パチマガスロマガ 1000円G数/RT純増: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/71/c.php
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/71/a.php
- HAZUSE: https://hazuse.com/i/data/choisugo_aribabainfantazia/top.htm
- 5号機クロニクル: https://5goki.com/universal

### スーパーお父さん reset QA
- HAZUSE: https://www.hazuse.com/i/det2/super_otousan/top.htm
- パチ7 『職業：攻略ライター』～超お父さん～: https://pachiseven.jp/articles/detail/8510

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準166件地点から継続。2007年9月残候補を引き続き具体導入日で監査する。`時空大作戦` と `ちょいスゴ!!アリババインファンタジア` は処理済みなので候補から除外。**
2. 優先候補: `戦慄-IF IT HAPPEN（戦慄DD） / DIGIParadise / くりぃむしちゅー / めんそーれ2-30 / クレイジージョーカー / コータローまかりとおる! / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 熊酒場30`。
3. `戦慄-IF IT HAPPEN（戦慄DD）` は2007-08-17時点でメーカー情報公開済み。9月内の具体的実導入日を引き続き詰める。
4. 2007-09-26〜30の具体導入日を持つ未処理機が十分な監査後も確認できなければ、残る月精度9月機を漏れ防止で順次処理しつつ2007年10月の最古未処理へ進む。
5. 現時点で `マッドジー` はK-Navi当時記事から2007-10-09、`マジックモンスター2` は2007-10-22予定を確認済み。これより早い10月機を先に監査する。
6. resetBehavior遡及QAは、**スーパーお父さんの次の最古未補完既存レコード**から継続する。候補は `ウイニングレッド / ウイニングレッド30`（2006-04）のresetBehavior有無をmainで確認して未補完側から処理。
7. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
