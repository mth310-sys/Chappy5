# じゃりン子チエ

machineName: じゃりン子チエ
manufacturer: バルテック
releaseDate: 2006-08
generation: 5号機初期
systemType: ボーナス + 完走型RT
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 98.5% |
| 3 | 100.4% |
| 4 | 101.5% |
| 5 | 102.6% |
| 6 | 103.5% |

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

設定別ボーナス確率: UNVERIFIED

- パチマガスロマガでは設定差がほぼボーナス抽選確率に存在し、黒REGを除く単独ボーナス合成が設定1 `1/2849.39` → 設定6 `1/897.75` と確認できる。
- ただし物差しコアに必要な設定別赤BIG/青BIG/白REG/黒REGの総成立確率表は今回の再探索でも一括確定できなかったため、既存 `PARTIAL` 判定を維持する。

## baseGamesPer50

- `44.06G/1000円`（パチマガスロマガ解析値）。

信頼度: ANALYSIS_HIGH

## netIncrease

- 完走型RT中リプレイ: `1/1.87`。
- RT中ハズレ: 約 `1/3.48`。
- RT純増: `+0.06枚/G`。

信頼度: ANALYSIS_HIGH

## basicPayout

- 赤BIG（スーパーBB）: 約370枚純増。465枚超の払い出しで終了。
- 青BIG（ノーマルBB）: 約200枚純増。245枚超の払い出しで終了。
- REG: 約90枚純増。12G消化または8回入賞で終了。

## modeSpecificMinimumData

- 型式名: じゃりン子チエSP
- ツインBB + ツインRB構成。
- 黒REG以外のボーナス後にRTへ突入。
- 赤BIG後: 100G RT。
- 青BIG後および「青7・青7・白7」REG後: 50G RT。
- RTはボーナス成立後も規定G数消化またはボーナス入賞まで継続する完走型。
- リプレイを含む全小役でボーナス同時抽選。

## resetBehavior

### settingChangeBehavior

- 設定変更時の100G/50G RT残G、内部RT状態、成立済みボーナス状態、リール初期挙動を示す本機固有の直接資料は `UNVERIFIED_AFTER_RESEARCH`。
- `じゃりン子チエ / じゃりン子チエSP / バルテック` と `設定変更 / リセット / 朝一 / ガックン / 据え置き / 電源 / RT` を組み替え、当時解析・業界記事・旧DB・回顧系を再探索したが確定資料なし。
- 後継機 `じゃりン子チエ 雷蔵伝説` はART/天井を持つ別仕様のため、後継機のリセット特性は流用しない。

### carryOverBehavior

- 据え置き時の100G/50G RT残G・内部状態の引継ぎは `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみの場合のRT残G・内部状態引継ぎは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 本機の100G/50Gはボーナス後RTの規定継続G数であり、通常時ハマリ天井ではない。
- 通常時ゲーム数天井は今回の高信頼資料では確認できず `NONE_CONFIRMED`。

### ceilingAfterReset

- リセット短縮天井、設定変更後専用天井は `NONE_CONFIRMED`。

### modeAfterReset

- 朝一専用モード、設定変更時のモード振り分けを示す資料は `NONE_CONFIRMED`。
- 通常演出の朝/昼/夕方/夜ステージは存在するが、設定変更時専用の内部モードと確認できる資料はないためリセットモード扱いしない。

### stateAfterReset

- 完走型RT中に設定変更/電断した場合の残G・内部RT状態処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（5号機初期、有利区間制度前）。

### resetBenefits

- 設定変更・朝一固有のRT直行、短縮天井等の公開恩恵は `NONE_CONFIRMED`。

### resetPenalties

- 設定変更・朝一固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ・ランプ等による設定変更/据え置き判別は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 公開された設定変更時専用の朝一数値は今回確認できず。

## sources

取得日: 2026-09-01

1. グリーンべると — 人気漫画『じゃりン子チエ』がパチスロに
   - https://web-greenbelt.jp/00004714/
   - 2006-06-23記事。5号機第3弾、型式名、ボーナス構成、赤7約370枚、RT 100G/50G、8月上旬納品予定。
   - reliability: INDUSTRY
2. パチマガスロマガ — じゃりン子チエSP 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/46/a.php
   - 完走型RT、各ボーナスの払い出し終了条件と純増目安、RT構造。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — じゃりン子チエSP 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/46/c.php
   - 1000円ベース44.06G、RT中リプレイ1/1.87、ハズレ約1/3.48、RT純増+0.06枚/G。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — じゃりン子チエSP 設定推測
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/46/i.php
   - ボーナス抽選に設定差、黒REG以外の単独成立合成1/2849.39→1/897.75等。
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — バルテック5号機一覧
   - https://5goki.com/baltec
   - 機械割96.9〜103.5%。導入時期は2006/7表記。
   - reliability: ANALYSIS_SINGLE
6. ITmedia Mobile — パチスロじゃりン子チエ アプリ記事
   - https://www.itmedia.co.jp/mobile/articles/0701/31/news098.html
   - 実機が2006年8月にホール登場したこと、朝/昼/夕方/夜の4ステージ構成を補助確認。
   - reliability: INDUSTRY

## missingFields

- 設定別赤BIG/青BIG/白REG/黒REGの総成立確率
- 設定別ボーナス合算の完全表
- 設定変更時の100G/50G RT残状態処理
- 据え置き時のRT残G・内部状態引継ぎ
- 電源OFF→ON時のRT残G・内部状態引継ぎ
- 本機固有の変更判別要素

## conflicts

- 導入時期: 5号機クロニクルは2006/7、2006-06-23のグリーンべるとは「8月上旬納品予定」、ITmediaは「2006年8月にホールに登場」。本DBでは実ホール投入基準を優先し2006-08配置とし、2006/7表記は資料差として保持する。
