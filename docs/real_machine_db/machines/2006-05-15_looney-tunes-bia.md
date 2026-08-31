# ルーニー・テューンズ バック・イン・アクション

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: ルーニー・テューンズ バック・イン・アクション
manufacturer: ゴールドオリンピア / オリンピア
releaseDate: 2006-05-15
generation: 5号機初期
systemType: ボーナス + RT（5ライン・3枚掛け専用）

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.0% |
| 2 | 99.0% |
| 3 | 101.9% |
| 4 | 104.3% |
| 5 | 107.2% |
| 6 | 109.4% |

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

ボーナス合成確率:

| 設定 | 合成 |
|---:|---:|
| 1 | 1/218.5 |
| 2 | 1/202.3 |
| 3 | 1/189.4 |
| 4 | 1/178.1 |
| 5 | 1/167.2 |
| 6 | 1/126.0 |

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「ベース」「コイン持ち」および型式名・表記揺れを含めて再探索したが、今回の取得範囲では比較可能な公表値を確定できず。

## netIncrease

RT「ルーニーチャンス」: 1Gあたり約+0.8枚。

- SUPER BIG後: 200G RT
- バグズBIG（白7）後: 50G RT
- ボーナス成立で終了

信頼度: ANALYSIS_HIGH

## basicPayout

P_Style777 / パチマガスロマガ系資料で定義を照合。

- SUPER BIG（赤7）: 規定払い出し345枚、純増約290枚
- バグズBIG（白7 / CT）: 規定払い出し240枚、純増約204枚
- ダフィーBIG（青7）: 規定払い出し240枚、純増約203〜204枚
- REG（CT）: 規定払い出し120枚、純増約108枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

### ボーナス確率（設定別）

P_Style777掲載値。4ボーナス構成は SUPER BIG / バグズBIG / ダフィーBIG / REG。

| 設定 | BB系合算（BB&CT） | REG | 合成 |
|---:|---:|---:|---:|
| 1 | 1/275.36 | 1/1057.03 | 1/218.5 |
| 2 | 1/255.00 | 1/978.15 | 1/202.3 |
| 3 | 1/237.45 | 1/936.23 | 1/189.4 |
| 4 | 1/223.67 | 1/873.81 | 1/178.1 |
| 5 | 1/210.05 | 1/819.20 | 1/167.2 |
| 6 | 1/192.75 | 1/364.09 | 1/126.0 |

個別ボーナス実質確率:

| 設定 | SBB赤7 | BB白7 | DB青7 | REG |
|---:|---:|---:|---:|---:|
| 1 | 1/744.73 | 1/744.73 | 1/1057.03 | 1/1057.03 |
| 2 | 1/689.85 | 1/689.85 | 1/978.15 | 1/978.15 |
| 3 | 1/636.27 | 1/636.27 | 1/936.23 | 1/936.23 |
| 4 | 1/601.25 | 1/601.25 | 1/873.81 | 1/873.81 |
| 5 | 1/564.97 | 1/564.97 | 1/819.20 | 1/819.20 |
| 6 | 1/819.20 | 1/819.20 | 1/364.09 | 1/364.09 |

※設定6は低設定群とボーナス配分構造が大きく異なる。

## resetBehavior

resetBehaviorQA: PARTIAL

`ルーニー・テューンズ バック・イン・アクション / ルーニーテューンズBIA / Looney Tunes BIA / ゴールドオリンピア / オリンピア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ルーニーチャンス / RT / 残りゲーム / ガックン / 変更判別 / 天井` を組み替え、当時攻略資料、パチマガスロマガ系、旧DB、後年検索資料を再探索。

### settingChangeBehavior

- 設定変更時の200G/50G RT残G・内部RT状態の具体的処理: UNVERIFIED。
- 設定変更専用の短縮天井・朝一専用モード・公開恩恵: NONE_CONFIRMED。

### carryOverBehavior

- 据え置き時のRT残G/内部RT状態引継ぎ: UNVERIFIED。
- 通常時ゲーム数天井の引継ぎ: NOT_APPLICABLE / NONE_CONFIRMED。

### powerCycleBehavior

- 電源OFF→ONのみの場合のRT残G/内部RT状態処理: UNVERIFIED。
- 設定変更時挙動から電断時の挙動を推定しない。

### gameCounterReset

- 通常時ゲーム数天井: NONE_CONFIRMED。
- 200G/50Gはボーナス後RT「ルーニーチャンス」の固定継続G数であり、通常時ハマリ天井ではない。

### ceilingAfterReset

- 通常時ゲーム数天井: NONE_CONFIRMED。
- リセット専用短縮天井: NONE_CONFIRMED。

### modeAfterReset

- 朝一専用モード / 設定変更時モード振り分け: NONE_CONFIRMED。

### stateAfterReset

- 設定変更/据え置き/電断時のルーニーチャンス内部RT状態・残G処理: UNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

### resetBenefits

- 朝一/設定変更専用の公開恩恵: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開不利要素: NONE_CONFIRMED。

### resetDetection

- 本機固有のリールガックン、初期出目、液晶/ランプ等による設定変更/据え置き判別: UNVERIFIED。

### numericResetData

- リセット後短縮天井G数: NONE_CONFIRMED / NOT_APPLICABLE
- 設定変更時専用モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-09-01

1. P_Style777 — ルーニーテューンズ バックインアクション
   - https://ps777.net/data/looneytunes.htm
   - 型式名、5号機/BB2+CT2/RT、発売時期2006-05-15、設定別機械割、設定別ボーナス確率、個別ボーナス確率、払い出し/純増、RTゲーム数
   - reliability: ANALYSIS_SINGLE（当時攻略資料）
2. パチマガスロマガ — ルーニー・テューンズ BIA
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/01/a.php
   - 5号機/5ライン/3枚掛け、4種ボーナス、RT純増約+0.8枚/G、赤7後200P・白7後50P RT、各ボーナス規定払い出し/純増
   - reliability: ANALYSIS_HIGH（P_Style777と基本性能の定義・数値が一致）
3. グリーンべると — 2006-04-14付の新機種記事
   - 2006年5月中旬発売予定のオリンピア5号機として確認（直前リレーで確認済み）
   - reliability: INDUSTRY

## missingFields

- 50枚あたりゲーム数 / 1000円ベース
- 設定変更時のRT残G・内部RT状態処理
- 据え置き時のRT残G/内部RT状態引継ぎ
- 電源OFF→ON時のRT残G/内部RT状態処理
- 本機固有リールガックン/変更判別の有無

## conflicts

- 前回引継ぎメモには「BIG最大416枚 + 50G RT / REG最大104枚」とする入口情報が残っていたが、当時攻略資料2系統では4種ボーナス構成および払い出し345/240/240/120枚、赤7後200G・白7後50G RTとして整合する。入口情報は別定義または別機混同の可能性があるため、このレコードでは採用せず、将来一次資料が見つかった場合の再QA対象とする。
