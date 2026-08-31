# がんばれ元気

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: がんばれ元気
manufacturer: ヤーマ（現ベルコ公式製品アーカイブ掲載）
releaseDate: 2007-07-22
generation: 5号機
systemType: ボーナス + ART（チャンピオンロード）

## releaseDate evidence

- 2007-06-29グリーンべると業界記事: 「納品は7月22日からスタートする予定」。時系列本線ではこの具体日を採用。
- ALL7.jp: 2007-07-30導入予定。
- P-Gabuメーカー一覧: 2007-06-25導入日。
- ベルコ公式製品アーカイブ: 2007年7月登場。

具体日が資料間で競合するため、releaseDateは当時業界一次系の具体納品予定日2007-07-22を採用し、他候補はCONFLICTとして保持する。

## payoutRateBySetting

### 市場掲載 / 攻略系

| 設定 | 機械割 |
|---|---:|
| 1 | 95.0% |
| 2 | 98.0% |
| 3 | 101.0% |
| 4 | 103.5% |
| 5 | 106.0% |
| 6 | 108.5% |

K-Navi、HAZUSE、旧5号機まとめwiki等で一致。

### パチマガスロマガ シミュレート値

| 設定 | PAYOUT |
|---|---:|
| 1 | 96.48% |
| 2 | 99.73% |
| 3 | 102.63% |
| 4 | 105.12% |
| 5 | 106.86% |
| 6 | 107.62% |

定義/算出差が明確なため平均化せずCONFLICTとして双方保持。

信頼度: CONFLICT（ANALYSIS_HIGH同士の定義差）

## initialHitBySetting

### 赤7BIG

| 設定 | 確率 |
|---|---:|
| 1 | 1/1260.31 |
| 2 | 1/1170.29 |
| 3 | 1/1170.29 |
| 4 | 1/1170.29 |
| 5 | 1/1092.27 |
| 6 | 1/1092.27 |

### 緑7BIG

| 設定 | 確率 |
|---|---:|
| 1 | 1/1638.40 |
| 2 | 1/1489.45 |
| 3 | 1/1260.31 |
| 4 | 1/1170.29 |
| 5 | 1/1170.29 |
| 6 | 1/1170.29 |

### BIG合成

| 設定 | 確率 |
|---|---:|
| 1 | 1/712.35 |
| 2 | 1/655.36 |
| 3 | 1/606.81 |
| 4 | 1/585.14 |
| 5 | 1/564.97 |
| 6 | 1/564.97 |

### REG

| 設定 | 確率 |
|---|---:|
| 1 | 1/606.81 |
| 2 | 1/606.81 |
| 3 | 1/585.14 |
| 4 | 1/585.14 |
| 5 | 1/585.14 |
| 6 | 1/409.60 |

### ボーナス合成

| 設定 | 確率 |
|---|---:|
| 1 | 1/327.68 |
| 2 | 1/315.08 |
| 3 | 1/297.89 |
| 4 | 1/292.57 |
| 5 | 1/287.44 |
| 6 | 1/237.45 |

パチマガスロマガ精密値。K-Navi/HAZUSEの丸め合成値（1/327→1/237）と整合。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

`がんばれ元気 / ガンバレゲンキ1 / ヤーマ` と `50枚 / 1000円 / 1k / ベース / コイン持ち / 通常時` を組み替え、メーカー製品アーカイブ、当時業界記事、HAZUSE、パチマガスロマガ、K-Navi、旧解析サイト、後年回顧/中古実機資料を横断したが、通常時50枚あたりの比較可能な公開値を今回確定できなかった。

※天井失敗後AT時に「1000円あたり約75G」という解析値はあるが、通常時ベースではないため混在させない。

## netIncrease

ART「チャンピオンロード」: 約+1.5枚/G。

- 金チャンピオンロード: 次回ボーナスまで継続
- 赤チャンピオンロード: 111G継続
- HAZUSEでは赤111Gの純増目安約160枚

ベルコ公式アーカイブはART搭載を確認、2007年当時グリーンべると/K-Navi/HAZUSE/旧解析で約+1.5枚/Gが一致。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout

- BIG（赤7/緑7）: 純増約312枚
- REG: 純増約54枚
- 解析上BIGは465枚超払い出し終了、REGは80枚超払い出し終了

2007年当時グリーンべると記事、HAZUSE、CrankySevenで一致。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

### ボーナス後とART

- BIG終了後はCZ「元気チャンス」を経由し、ARTへ100%突入。
- ARTは金（次回ボーナスまで）または赤（111G）。
- HAZUSE: 金:赤の突入比率 約1:4.5。
- REG後はCZ「チャレンジファイト」。HAZUSEではART突入率約35%。
- 赤ART111G完走後もチャレンジファイトへ移行し、HAZUSEでは約20%でARTループ。
- ARTにパンク役を採用せず、初心者でもARTを維持しやすい仕様と当時業界記事/公式アーカイブで確認。

### 天井

- チャレンジファイト終了後950G消化で「天井チャレンジファイト」へ突入する解析情報あり。
- 天井CZで特殊リプレイより先にチャンス目を引けばARTへ。
- ART突入に失敗してもATへ移行し、次回ボーナスまで継続する解析情報あり。
- AT中コイン持ち目安: 約75G/1000円（通常時ベースとは区別）。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `がんばれ元気 / ガンバレゲンキ1 / ヤーマ / ベルコ` と `設定変更 / リセット / 朝一 / 設定変更後 / 初期化 / ART / 元気チャンス / チャレンジファイト / 天井` を組み替え、メーカー公式、当時業界記事、HAZUSE、K-Navi、パチマガスロマガ、旧天井DB、旧解析資料を再探索。
- 設定変更時に通常状態へ移行するか、ART/CZ/AT状態や950G天井カウンタをどう扱うかを本機固有の高信頼資料で確定できずUNVERIFIED。

carryOverBehavior:
- 据え置き時のART/CZ/AT状態、チャレンジファイト終了後からの950G天井進行の引継ぎはUNVERIFIED。
- 据え置き固有の朝一恩恵/不利を示す公開値はNONE_CONFIRMED。

powerCycleBehavior:
- 電源OFF→ONのみの場合のART/CZ/AT状態、天井ゲーム数の保持/初期化を本機固有資料で確定できずUNVERIFIED。

 gameCounterReset:
- 通常時にはチャレンジファイト終了後950Gの天井構造が確認される。
- 設定変更時にこの天井進行がリセットされるか引き継がれるかはUNVERIFIED。

ceilingAfterReset:
- 設定変更後の短縮天井・専用天井はNONE_CONFIRMED。
- 通常天井950Gの変更後扱いはUNVERIFIED。

modeAfterReset:
- 朝一専用ゲーム数モード、設定変更時専用モード、公開モード振り分けはNONE_CONFIRMED。

stateAfterReset:
- ART「チャンピオンロード」、CZ「元気チャンス/チャレンジファイト」、天井失敗後ATの設定変更/据え置き/電断時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の天井短縮、朝一ART/CZ優遇、初当たり優遇、公開朝一恩恵発生率はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、液晶/ランプ、ART/CZ挙動等による設定変更/据え置き判別情報は十分再探索後もUNVERIFIED。

numericResetData:
- 通常時天井: チャレンジファイト終了後950G（解析値）
- リセット後短縮天井: NONE_CONFIRMED
- 設定変更時モード振り分け/朝一当選率/リセット恩恵発生率: 公開比較可能値を今回確認できず

## sources

取得日: 2026-08-31

1. ベルコ公式製品アーカイブ — がんばれ元気
   - https://www.s-bellco.co.jp/products/slot/yama_genki/
   - 2007年7月登場、ヤーマ、5号機、ART、パンクなしARTシステムを確認
   - reliability: OFFICIAL
2. P-WORLD / グリーンべると — 小山ゆうの「がんばれ元気」がパチスロに（2007-06-29）
   - https://news.p-world.co.jp/articles/2267/greenbelt
   - 型式名ガンバレゲンキ1、BIG約312枚、REG約54枚、ART約+1.5枚/G、金/赤ART構造、納品2007-07-22開始予定
   - reliability: INDUSTRY
3. パチマガスロマガ — がんばれ元気 ボーナス抽選確率 / PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/08/h.php
   - 設定別赤7/緑7/BIG合成/REG/合成の精密値、シミュレートPAYOUT
   - reliability: ANALYSIS_HIGH
4. HAZUSE — ganbaregenki 解析・機種情報
   - https://www.hazuse.com/i/data/ganbaregenki/top.htm
   - 2007年7月、合成、機械割、BIG約312枚/REG約54枚、ART約1.5枚/G、金/赤ART、REG後約35%、赤ART後約20%
   - reliability: ANALYSIS_HIGH
5. K-Navi — がんばれ元気
   - https://p-kn.com/slot/604/
   - ボーナス合算95?（確率表）、市場掲載機械割95.0〜108.5%、ART約1.5枚/G
   - reliability: ANALYSIS_HIGH
6. CrankySeven — がんばれ元気 解析・天井
   - https://crankyseven.com/ganbaregenki-pc.htm
   - BIG/REG純増、ART構造、チャレンジファイト終了後950G天井、天井失敗後AT、AT時約75G/1000円
   - reliability: ANALYSIS_SINGLE
7. CrankySeven — 5号機天井早見表（か行）
   - https://crankyseven.com/sp/tenjo-5ka.htm
   - チャレンジファイト終了後950Gの天井を再照合。設定変更後欄には天井AT説明のみで、変更時カウンタ処理の記述なし
   - reliability: ANALYSIS_SINGLE
8. ALL7.jp — 2007年7月導入予定一覧
   - https://www.all7.jp/plans/index/2007/07
   - がんばれ元気 / ヤーマ / 2007-07-30導入予定
   - reliability: OLD_DB_SUPPORT
9. P-Gabu — ヤーマ機種一覧
   - https://p-gabu.jp/guideworks/machine/maker/yama
   - がんばれ元気（ガンバレゲンキ1）導入日2007-06-25と掲載。業界当時記事と日付競合
   - reliability: OLD_DB_SUPPORT
10. パチスロ5号機まとめwiki — がんばれ元気
   - https://w.atwiki.jp/5gouki/pages/136.html
   - 設定別ボーナス確率、機械割95.0〜108.5%、ART約1.5枚/Gの補助照合
   - reliability: ANALYSIS_SUPPORT

## missingFields

- 通常時50枚あたりゲーム数 / ベース
- 設定変更時の950G天井ゲーム数リセット/引継ぎ
- 据え置き時の天井・ART/CZ/AT状態引継ぎ
- 電源OFF→ON時の天井・ART/CZ/AT状態処理
- 設定変更時のART/CZ状態処理
- 本機固有のガックン/変更判別
- 公開朝一専用数値

## conflicts

1. 導入/納品日: グリーンべると2007-07-22納品開始予定 / ALL7 2007-07-30導入予定 / P-Gabu 2007-06-25導入日。平均化せず保持し、時系列本線は当時業界記事の具体納品予定日を採用。
2. 機械割: K-Navi/HAZUSE/旧wiki等 95.0/98.0/101.0/103.5/106.0/108.5% に対し、パチマガスロマガのシミュレートPAYOUTは96.48/99.73/102.63/105.12/106.86/107.62%。定義差の可能性が高いためCONFLICTとして双方保持。
