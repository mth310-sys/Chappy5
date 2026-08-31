# 仮面ライダーDX〜走れ！スーパーバイク編

machineName: 仮面ライダーDX〜走れ！スーパーバイク編
formalModelName: カメンライダーDX8
manufacturer: サミー
releaseDate: 2007-02-18
generation: 5号機初期
systemType: A+RT / ボーナス後リプパン外し型RT

## payoutRateBySetting

パチマガスロマガ旧攻略のシミュレート値を主値として保存する。

- 設定1: 97.27%
- 設定2: 99.38%
- 設定3: 102.77%
- 設定4: 106.19%
- 設定5: 112.71%
- 設定6: 118.76%

K-Naviは97.0 / 99.0 / 102.0 / 105.0 / 111.0 / 117.0%、pacnkは97.0 / 99.0 / 102.0 / 106.0 / 112.0 / 118.0%を掲載しており、設定4〜6を中心に資料差がある。平均化しない。

信頼度: CONFLICT（主値はANALYSIS_HIGH）

## initialHitBySetting

### BIG合成
- 設定1: 約1/496（解析精密値は3種BIG合成）
- 設定2: 約1/465
- 設定3: 約1/431
- 設定4: 約1/395
- 設定5: 約1/364
- 設定6: 約1/350

### REG
- 設定1: 1/1213.63
- 設定2: 1/1213.63
- 設定3: 1/1092.27
- 設定4: 1/1092.27
- 設定5: 1/936.23
- 設定6: 1/873.81

### ボーナス合成
- 設定1: 1/352.34
- 設定2: 1/336.08
- 設定3: 1/309.13
- 設定4: 1/289.98
- 設定5: 1/262.14
- 設定6: 1/250.14

P-WORLD・グリーンべるとの丸め値とも整合する。

信頼度: ANALYSIS_HIGH / INDUSTRY

## baseGamesPer50

パチマガスロマガ旧攻略の1000円あたりプレイ数（50枚等価の物差し）:

- 設定1: 39.19P
- 設定2: 39.20P
- 設定3: 39.24P
- 設定4: 39.26P
- 設定5: 40.03P
- 設定6: 42.01P

信頼度: ANALYSIS_HIGH

## netIncrease

- RT「ライダータイム」: 約0.6枚/Gとする後年回顧資料あり
- 当時業界記事は「コイン微増」と説明し、最大2000G継続を確認

数値純増約0.6枚/Gは現時点で単一後年資料のため ANALYSIS_SINGLE、RT構造自体は INDUSTRY / ANALYSIS_HIGH。

## basicPayout

- BIG: 399枚を超える払い出しで終了、実純増約320枚
- REG: 12P消化または8回入賞で終了、実純増約90枚
- グリーンべると当時記事もBIG約320枚、REG約90枚で一致

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン / 3枚掛け専用
- BIGは1号BIG（赤）・2号BIG（白）・V3BIG（緑）の3種類、REGを含む計4ボーナス
- 全ボーナス終了後にRT「ライダータイム」へ突入
- ライダータイム最大2000G
- RT終了条件: 規定ゲーム数消化 / ボーナス成立 / チェリー入賞
- RT中は3種類のチェリーをナビに従って外すことで延命するリプパン外し型
- 初期チェリーナビ回数はボーナス種類・設定で差があり、RT中も特定契機で上乗せされる
- 白BIG成立時のナビ回数例（設定1〜4）: 0回58.17%、1回27.89%、3回11.95%、5回1.99%。設定5・6では多回数側が優遇される
- 天井によるボーナス当選は確認されない

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 設定変更時にライダータイム内部状態・残ナビ回数・RT継続状態をどう処理するか、本機固有の高信頼公開資料を確認できず UNVERIFIED
- carryOverBehavior: 据え置き時のRT内部状態/残ナビ回数の引継ぎを明示した高信頼資料を確認できず UNVERIFIED
- powerCycleBehavior: 電源OFF→ONのみの場合のRT内部状態/残ナビ回数の処理を明示した本機固有資料を確認できず UNVERIFIED
- gameCounterReset: 通常時のボーナス当選天井は確認されず。RTの最大継続2000Gは天井ではなくRT規定ゲーム数
- ceilingAfterReset: 非該当（通常時ボーナス天井を確認せず）
- modeAfterReset: 朝一専用モード/設定変更専用モードを確認できず
- stateAfterReset: 設定変更時のRT状態処理を高信頼で確定できず
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 設定変更・朝一固有の主要恩恵を確認できず
- resetPenalties: 設定変更固有の主要不利要素を確認できず
- resetDetection: 本機固有のガックン・表示・RT挙動等による設定変更判別を高信頼で確定できず
- numericResetData: 公開された設定変更時専用の比較可能数値は確認できず

### resetBehavior 再探索メモ

「仮面ライダーDX / 仮面ライダーDX走れスーパーバイク編 / カメンライダーDX8 / サミー」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT引継ぎ / ライダータイム / ナビ回数 / 天井 / ガックン」を組み合わせ、当時業界記事、P-WORLD、HAZUSE、パチマガスロマガ旧攻略、K-Navi、古い解析サイト、後年回顧を横断した。通常時・RT中の基本仕様とナビ振り分けは確認できたが、設定変更・据え置き・電断時の内部RT/残ナビ状態処理を明記した高信頼資料は得られなかったため推測しない。

## sources

取得日: 2026-08-31

1. グリーンべると — パチスロ界に正義のライダー参上！（2007-01-19）
   - https://web-greenbelt.jp/00003982/
   - 型式名カメンライダーDX8、納品2007-02-18、RT最大2000G、終了条件、BIG約320枚、REG約90枚、BB/RB確率
   - reliability: INDUSTRY
2. P-WORLD — 仮面ライダーDX走れ!スーパーバイク編
   - https://www.p-world.co.jp/machine/database/4557
   - 2007年2月、型式名、設定別BIG/REG、ボーナス合成
   - reliability: INDUSTRY
3. パチマガスロマガ旧攻略 — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/102/a.php
   - 5号機/5ライン/3枚掛け、全ボーナス後RT、BIG399枚規定払い出し・約320枚、REG約90枚
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧攻略 — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/102/h.php
   - 各BIG/REG、合算1/352.34〜1/250.14、PAYOUT 97.27〜118.76%
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧攻略 — 小役確率/1000円プレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/102/c.php
   - 39.19〜42.01P/1000円
   - reliability: ANALYSIS_HIGH
6. K-Navi — 仮面ライダーDX 走れ!スーパーバイク編
   - https://p-kn.com/slot/676/
   - 設定別BIG/REG、機械割97.0〜117.0%
   - reliability: ANALYSIS_SINGLE
7. pacnk — 仮面ライダーDX走れ!スーパーバイク編 設定判別ツール
   - https://pacnk.com/slot/tools/sh_kriderdxhashiresupabaikuhen.html
   - BIG/REG/15枚役、PAYOUT 97.0〜118.0%
   - reliability: ANALYSIS_SINGLE
8. pachirinko — 仮面ライダーDX 機種情報 / ナビ回数
   - https://www.pachirinko.com/5gouki.kamen.raidaa.html
   - BIG平均321枚、REG平均94枚
   - https://www.pachirinko.com/5gouki.kamen.raidaa.siro.big.html
   - 白BIG成立時の設定別初期ナビ回数振り分け
   - reliability: ANALYSIS_SINGLE
9. パチ7回顧 — 『ボッタ店で117％』～5号機新時代～
   - https://pachiseven.jp/articles/detail/9576
   - 2007年2月、全ボーナス後RT、最大2000G、チェリーパンク回避、ナビ回数・上乗せ概要
   - reliability: ANALYSIS_HIGH
10. 道外れの人生(改) — 1万枚出る5号機爆裂RT！初代『仮面ライダーDX』
   - https://mitihazure.blog.fc2.com/blog-entry-1490.html
   - 後年回顧。RT純増約0.6枚/G、機械割シミュレート値97.27〜118.76%
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更時のRT内部状態/残ナビ回数処理
- 据え置き時のRT内部状態/残ナビ回数引継ぎ
- 電源OFF→ONのみのRT内部状態/残ナビ回数処理
- 本機固有のresetDetection（ガックン等）

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## conflicts

- 機械割: パチマガスロマガ旧攻略 97.27/99.38/102.77/106.19/112.71/118.76%、K-Navi 97/99/102/105/111/117%、pacnk 97/99/102/106/112/118%。平均せず全根拠を保持する。
- K-Navi検索表示で設定6 BIGが1/364と出る箇所がある一方、P-WORLD・グリーンべると・パチマガスロマガ旧攻略・pacnkは設定6約1/350で一致するため、設定6 BIG主値は約1/350を採用しK-Navi表示差を競合メモとして残す。
