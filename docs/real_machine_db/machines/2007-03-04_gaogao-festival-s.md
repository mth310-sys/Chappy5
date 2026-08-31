# ガオガオフェスティバルS

machineName: ガオガオフェスティバルS
manufacturer: SANKYO
releaseDate: 2007-03-04（当時業界記事で納品開始。SANKYO公式アーカイブは2007.03導入）
generation: 5号機初期
systemType: ノーマル / Aタイプ / 完全告知 / ボーナス主体

## payoutRateBySetting

### 旧パチマガスロマガ シミュレート値
- 設定1: 97.09%
- 設定2: 99.29%
- 設定3: 101.26%
- 設定4: 104.39%
- 設定5: 108.18%
- 設定6: 110.62%

### 後年整理資料値
- 設定1: 96.5%
- 設定2: 98.6%
- 設定3: 100.4%
- 設定4: 103.2%
- 設定5: 106.7%
- 設定6: 109.0%

両系列に差があるため平均せず CONFLICT として保持する。

信頼度: CONFLICT

## initialHitBySetting

### BIG
- 設定1: 1/445.82
- 設定2: 1/422.81
- 設定3: 1/404.54
- 設定4: 1/376.64
- 設定5: 1/360.09
- 設定6: 1/348.60

### REG
- 設定1: 1/590.41
- 設定2: 1/555.39
- 設定3: 1/524.29
- 設定4: 1/481.88
- 設定5: 1/445.82
- 設定6: 1/409.60

### ボーナス合算（当時業界記事/P-WORLDの丸め値）
- 設定1: 約1/254
- 設定2: 約1/240
- 設定3: 約1/228
- 設定4: 約1/211
- 設定5: 約1/199
- 設定6: 約1/188

旧パチマガスロマガの設定別BIG/REG解析値と、2007年当時のグリーンべると/P-WORLD掲載値が丸め差の範囲で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

「ガオガオフェスティバル / ガオガオフェスティバルS / SANKYO」に「50枚 / 1000円 / ベース / コイン持ち / 小役確率 / プレイ数」を組み合わせ、旧解析、P-WORLD、当時業界記事、後年DBを横断したが、比較可能な高信頼の50枚あたりゲーム数は今回確定できず。

- UNVERIFIED

信頼度: UNVERIFIED

## netIncrease

- 非該当。RT/ART/ATは搭載しない。

## basicPayout

- BIG: 平均獲得約350枚
- REG: 平均獲得約104枚

2007年当時の業界記事で明記。

信頼度: INDUSTRY

## modeSpecificMinimumData

- 5号機初期の完全告知ノーマルタイプ。
- BIG 1種類 + REG 1種類。
- RT非搭載。
- リール左下「GAOGAO」ランプ点灯でボーナス告知。
- 告知の約1/4がレバーON、約3/4が第3停止後の後告知。
- 上部「デカGAOGAOランプ」点灯はBIG確定。
- 全小役がボーナス同時抽選対象。
- 通常時のゲーム数解除/天井機能は確認できず。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 設定変更時の本機固有内部状態処理を明記した高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 据え置き時に引き継ぐべき天井/モード/RT等の機能は確認できない。ボーナス主体ノーマル機としての本機固有処理を直接示す資料は未確認
- powerCycleBehavior: 電源OFF→ONのみの本機固有挙動を明記した高信頼資料を確認できず UNVERIFIED
- gameCounterReset: 通常時天井/ゲーム数解除機能を確認できず、物差し上の天井ゲーム数カウンタは確認なし
- ceilingAfterReset: 天井短縮・リセット天井は確認できず
- modeAfterReset: 通常時モード/朝一専用モードは確認できず
- stateAfterReset: RT/ART/AT状態は非該当。本機固有の設定変更時状態再抽選資料は未確認
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 朝一/設定変更固有の主要出玉恩恵は確認できず
- resetPenalties: 設定変更固有の主要不利要素は確認できず
- resetDetection: 「ガックン / 設定変更判別 / 朝一 / リール始動」まで検索したが、本機固有の高信頼な変更判別情報を確定できず UNVERIFIED
- numericResetData: 設定変更時専用の公開朝一数値は確認できず

### resetBehavior 再探索メモ

「ガオガオフェスティバル」「ガオガオフェスティバルS」「SANKYO」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / モード / 状態」を組み合わせて検索。SANKYO公式アーカイブ、2007年当時業界記事、P-WORLD機種DB、旧パチマガスロマガ、後年DB/回顧資料を横断した。ノーマル機としてRT・天井・通常時モードは確認できなかったが、本機固有の設定変更/電断時処理やガックン判別を直接記す高信頼資料は発見できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

1. SANKYOオンライン博物館 — ガオガオフェスティバル
   - https://www.sankyo-fever.jp/collection/529/
   - 2007.03導入、SANKYO、完全告知、BIG/REG各1種、ボーナス+小役同時抽選
   - reliability: OFFICIAL
2. P-WORLD パチンコ業界ニュース / グリーンべると — SANKYOから完全告知『ガオガオフェスティバル』
   - https://news.p-world.co.jp/articles/2040/greenbelt
   - 2007-02-09掲載、3/4納品、BIG 1/446〜1/349、REG 1/590〜1/410、合算1/254〜1/188、BIG約350枚、REG約104枚、RTなし
   - reliability: INDUSTRY
3. パチマガスロマガ旧攻略 — ボーナス抽選確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/07/h.php
   - 設定別BIG/REG解析値、PAYOUTシミュレート97.09〜110.62%
   - reliability: ANALYSIS_HIGH
4. P-WORLD 機種DB — ガオガオフェスティバルS
   - https://www.p-world.co.jp/machine/database/4580
   - BIG/REG/合算の設定別丸め値を照合
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — SANKYO/JB 5号機一覧
   - https://5goki.com/sankyo
   - 2007/3導入、機械割96.5〜109.0%。ただし同ページのBIG/REG確率欄は当時業界記事・旧パチマガ・P-WORLDと大きく不一致のため確率値は採用せず conflict evidence として保持
   - reliability: ANALYSIS_SINGLE
6. pachinko's blog — SANKYO「ガオガオフェスティバルS」
   - https://pachinko.hatenablog.jp/entry/2007/03/gaogao-festival-S
   - 機械割96.5〜109.0%、BIG/REG/合算は当時業界値と一致
   - reliability: ANALYSIS_SINGLE

## missingFields

- 比較可能な50枚あたりゲーム数/1000円ベース
- 設定変更時の本機固有内部処理
- 電源OFF→ONのみの本機固有挙動
- 本機固有のガックン等の変更判別
- 公開朝一専用数値

## conflicts

- 機械割: 旧パチマガスロマガのシミュレート値 97.09 / 99.29 / 101.26 / 104.39 / 108.18 / 110.62% と、後年整理資料の 96.5 / 98.6 / 100.4 / 103.2 / 106.7 / 109.0% が競合。平均せず双方保持。
- 5号機クロニクルにはBIG 1/297.9〜1/240.1、REG 1/455.1〜1/356.2という別値が掲載されるが、2007年当時グリーンべると/P-WORLD・旧パチマガ・P-WORLD機種DBの3系統が BIG 1/445.82〜1/348.60、REG 1/590.41〜1/409.60 で一致するため、前者は採用せず競合根拠として保存。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
