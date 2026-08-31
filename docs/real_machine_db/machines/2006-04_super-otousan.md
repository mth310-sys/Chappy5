# スーパーお父さん

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: スーパーお父さん
manufacturer: SNKプレイモア
releaseDate: 2006-04
generation: 5号機初期
systemType: ボーナス + ループ型RT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.9% |
| 2 | 98.4% |
| 3 | 100.8% |
| 4 | 103.3% |
| 5 | 105.8% |
| 6 | 108.1% |

5号機クロニクルとpacnkの数値は丸め差の範囲で一致。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

ボーナス合算:

| 設定 | 合算 |
|---|---:|
| 1 | 1/184.1 |
| 2 | 1/177.1 |
| 3 | 1/170.7 |
| 4 | 1/164.6 |
| 5 | 1/159.1 |
| 6 | 1/153.8 |

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「コイン持ち」「ベース」等へ検索語を変更して再探索したが、今回の比較可能な公開値は確認できなかった。

## netIncrease

30G固定RT「バトルチャンス」を搭載。RTの1Gあたり純増は今回UNVERIFIED。

## basicPayout

- BIG: 約280枚
- CB: 108枚固定

HAZUSEではBIGは345枚超の払い出しで終了（純増約280枚）、CBは134枚超の払い出しで終了（108枚固定）と記載。

## modeSpecificMinimumData

### 設定別ボーナス確率

| 設定 | BIG | CB |
|---|---:|---:|
| 1 | 1/321.3 | 1/431.2 |
| 2 | 1/309.1 | 1/414.8 |
| 3 | 1/297.9 | 1/399.6 |
| 4 | 1/287.4 | 1/385.5 |
| 5 | 1/277.7 | 1/372.4 |
| 6 | 1/268.6 | 1/360.1 |

5号機クロニクルとpacnkで一致。

信頼度: ANALYSIS_HIGH

### RT構造

- 30G固定のRT「バトルチャンス」
- 全設定共通でループ率約67%とする当時解析資料あり
- ボーナス後はCZへ移行し、CZとRTを往復するループ型RTとして後年の5号機システム史でも解説されている

## resetBehavior

resetBehaviorQA: PARTIAL

`スーパーお父さん / 超お父さん / SNKプレイモア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / バトルチャンス / BC / CZ / ガックン / 変更判別` を組み替え、当時解析と後年の元攻略誌ライター回顧を再探索。

### settingChangeBehavior

- **設定変更後は必ず内部BC抽選状態（CZ）からスタート。** HAZUSE当時解析に明記。
- 後年パチ7の元攻略誌ライターによる当時実戦回顧でも「設定変更後もボーナス後と同じくCZからスタート」と明記され、別系統で一致。
- 液晶上は通常時と変わらず、外見だけではCZ滞在を直接判別できない。
- 信頼度: ANALYSIS_HIGH（当時解析 + 後年当時実戦回顧一致）

### carryOverBehavior

- 据え置き時に通常状態/CZ/BC残Gをどのように引き継ぐか: UNVERIFIED。
- 通常時ハマリ天井のゲーム数引継ぎ: NOT_APPLICABLE / NONE_CONFIRMED。

### powerCycleBehavior

- 電源OFF→ONのみの場合のCZ/BC状態・BC残G処理: UNVERIFIED。
- 設定変更後CZスタートという事実から電断挙動は推定しない。

### gameCounterReset

- 通常時ゲーム数天井: NONE_CONFIRMED。
- BCは30G固定RTであり、通常時ハマリ天井ではない。
- 設定変更後は内部CZから開始することを確認済み。

### ceilingAfterReset

- 通常時ゲーム数天井: NONE_CONFIRMED。
- リセット専用短縮天井: NONE_CONFIRMED。

### modeAfterReset

- 設定変更後は内部CZ（BC抽選状態）スタート。
- それ以外の朝一専用モード/モード振り分け: NONE_CONFIRMED。

### stateAfterReset

- 設定変更後: CZスタート CONFIRMED。
- 据え置き/電断時のCZ/BC状態引継ぎ: UNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機・有利区間制度導入前）。

### resetBenefits

- 設定変更後CZからスタートするため、チェリーより先にベルを引けば30G BCへ突入し得る。これは朝一の変更推測材料になる。
- リセット専用短縮天井等: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開不利要素: NONE_CONFIRMED。

### resetDetection

- 設定変更後CZ中に**チェリーより先にベルを引いてBCへ突入した場合、設定変更を推測できる**という当時の変更判別手掛かりが存在。
- 逆にチェリーを先に引いた場合は通常状態へ転落するため、その手順だけでは変更/据え置きを判別できない。
- 液晶上は設定変更後CZでも通常時と同じため、見た目のみでは直接判別不能。
- 本機固有のリールガックンについては今回確定資料を得られずUNVERIFIED。

### numericResetData

- 設定変更後CZ開始: 100%（「必ず内部BC抽選状態からスタート」と当時解析に記載）
- CZからBCへのループ構造全体は全設定共通約67%とされるが、これはリセット専用数値ではないためnumericResetDataのリセット恩恵率としては扱わない。
- リセット後短縮天井G数: NONE_CONFIRMED / NOT_APPLICABLE
- 朝一特定G以内ボーナス当選率: NONE_CONFIRMED

## sources

取得日: 2026-09-01

1. 5号機クロニクル — SNKプレイモア5号機全機種一覧
   - https://5goki.com/snkplaymore
   - 2006/4導入、設定別BIG/REG表記、合算、機械割
   - reliability: ANALYSIS_SINGLE
2. pacnk — スーパーお父さん 設定判別ツール
   - https://pacnk.com/slot/tools/sh_supaotousan.html
   - 2006年4月導入、設定別BIG/CB、機械割
   - reliability: ANALYSIS_SINGLE
3. HAZUSE — スーパーお父さん解析・機種情報
   - https://www.hazuse.com/i/det2/super_otousan/top.htm
   - SNKプレイモア初の5号機、BIG/CB終了条件と実獲得目安、30G RT、ループ率約67%、**設定変更後は必ず内部BC抽選状態からスタート**。
   - reliability: ANALYSIS_HIGH
4. パチ7 — 5号機まとめ#02 システム面で振り返る
   - https://pachiseven.jp/articles/detail/14435%26title%3Dpachiseven.jp
   - CZと固定RTを往復するループ型RTの歴史的整理
   - reliability: ANALYSIS_SINGLE
5. パチ7 — 5号機の発展を名機で振り返る(2006年編)
   - https://pachiseven.jp/articles/detail/4314
   - 2006年4月、RT連チャンシステムの補助確認
   - reliability: ANALYSIS_SINGLE
6. パチ7 — 『職業：攻略ライター』～超お父さん～
   - https://pachiseven.jp/articles/detail/8510
   - 元攻略誌ライターによる当時実戦回顧。設定変更後もボーナス後同様CZスタート、液晶上は通常時と同じ、ベル先行→BC突入を変更推測材料とする当時の変判事情を記載。
   - reliability: RETROSPECTIVE_HIGH

## missingFields

- 50枚あたりゲーム数 / ベース
- RT 1Gあたり純増
- 据え置き時のCZ/BC状態引継ぎ
- 電源OFF→ON時のCZ/BC状態・BC残G処理
- 本機固有リールガックンの有無

## conflicts

- 5号機クロニクルでは低い方のボーナスをREG表記するが、当時HAZUSEおよびpacnkはCB（チャレンジボーナス）表記。物差しDBでは当時解析側のCB表記を採用し、名称差として記録する。
