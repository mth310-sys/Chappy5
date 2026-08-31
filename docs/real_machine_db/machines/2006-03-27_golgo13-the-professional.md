# ゴルゴ13 ザ・プロフェッショナルJ

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: ゴルゴ13 ザ・プロフェッショナルJ
manufacturer: オリンピア製造 / 平和企画・販売
generation: 5号機初期
releaseDate: 2006-03-27
systemType: ボーナス + AT

aliases:
- ゴルゴ13 THE PROFESSIONAL
- ゴルゴ13ザ・プロフェッショナル

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.80% |
| 2 | 98.30% |
| 3 | 101.00% |
| 4 | 104.20% |
| 5 | 105.80% |
| 6 | 108.50% |

pacnk掲載値。別回顧資料では96.5〜108.8%と小差があるため、現時点ではANALYSIS_SINGLEとして保持し将来照合対象。

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

| 設定 | BIG | REG |
|---|---:|---:|
| 1 | 1/399.61 | 1/992.97 |
| 2 | 1/392.43 | 1/963.76 |
| 3 | 1/374.49 | 1/936.23 |
| 4 | 1/360.09 | 1/923.04 |
| 5 | 1/356.17 | 1/910.22 |
| 6 | 1/344.93 | 1/897.75 |

MBを含む全ボーナス合算は今回未確定。BIG/REGはpacnk掲載値。

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

- 適当打ち: 約30.9G / 1000円
- 小役狙い: 約31.4G / 1000円

パチ＆スロ必勝本掲載。

信頼度: ANALYSIS_HIGH

## netIncrease

ATは出玉を直接大幅増加させるタイプではなく、通常時よりコイン持ちが約2倍になるアシスト機能として説明されている。

- Sモード: BIG後に必ず突入
- Gモード: 通常時からも突入

AT中1Gあたり純増は今回未確定。

## basicPayout

パチマガスロマガ:
- BIG（赤7）: 規定払い出し345枚超 / 純増約312枚
- MB（青7）: 規定払い出し225枚超 / 純増約208枚
- REG: 規定払い出し105枚超 / 純増約104枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機初のAT機能搭載と当時業界記事で紹介
- ATはBIG後の「スナイパーモード」と通常時からも入る「Gモード」
- パチマガスロマガではATによりコイン持ちが約2倍と説明
- 3枚掛け専用 / 5ライン

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 設定変更時にSモード/Gモード状態・残りプレイ数・Gモード連チャン状態をどのように処理するかは、機種名/型式・AT名・設定変更/リセット/朝一関連語を変えて再探索したがUNVERIFIED。
- 設定変更専用の短縮天井・朝一初当たり優遇はNONE_CONFIRMED。

carryOverBehavior:
- 通常時ゲーム数天井は今回確認されず、通常時天井ゲーム数の据え置き狙い要素はNONE_CONFIRMED。
- 据え置き時のSモード/Gモード内部状態・残りP引継ぎはUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみでSモード/Gモード内部状態・残りPを保持するかはUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED。天井ゲーム数リセット/引継ぎの比較対象はNOT_APPLICABLE相当。

ceilingAfterReset:
- リセット短縮天井・変更後専用天井はNONE_CONFIRMED。

modeAfterReset:
- 設定変更時のSモード/Gモード再抽選・朝一専用モードはUNVERIFIED / NONE_CONFIRMED。

stateAfterReset:
- AT内部状態の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の朝一恩恵、短縮天井、公開初当たり優遇はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、表示、AT状態等による設定変更判別は十分再探索後もUNVERIFIED。

numericResetData:
- 朝一専用モード振り分け / リセット恩恵発生率 / 短縮天井G数: 公開比較値を今回確認できず。

## sources

取得日: 2026-08-31

1. グリーンべると / P-WORLD業界ニュース — 平和から『ゴルゴ13』シリーズ続編
   - https://news.p-world.co.jp/articles/1576/greenbelt
   - 2006-02-03発表記事、5号機初のAT機能、Sモード/Gモード、3月下旬納品予定
   - reliability: INDUSTRY
2. ALL7.jp — 2006年3月導入予定一覧
   - https://www.all7.jp/plans/index/2006/03
   - ゴルゴ13 THE PROFESSIONAL / 平和 / 導入予定2006-03-27
   - reliability: INDUSTRY
3. パチマガスロマガ — ゴルゴ13ザ・プロフェッショナル
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/29/a.php
   - BIG/MB/REG純増、AT構造、5号機/AT/3枚掛け専用
   - reliability: ANALYSIS_HIGH
4. パチ＆スロ必勝本 — 通常時打法
   - https://p.hisshobon.jp/machine/531/1/10029
   - 1000円あたり適当打ち30.9G、小役狙い31.4G
   - reliability: ANALYSIS_HIGH
5. pacnk — ゴルゴ13ザプロフェッショナル設定判別ツール
   - https://pacnk.com/slot/tools/sh_gorugo13zapurofesshonaru.html
   - 設定別BIG/REG、機械割
   - reliability: ANALYSIS_SINGLE
6. パチマガスロマガ — ATの特徴
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/29/e.php
   - Sモード最大130P、BIG後必ず突入、Gモードの存在と抽選契機を確認。
   - reliability: ANALYSIS_HIGH
7. パチ7 — AT・ARTの変遷
   - https://pachiseven.jp/articles/detail/14122
   - 5号機初AT機、ATが現状維持レベルの機能だったことを後年解説。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定別MB確率
- 全ボーナス合算の設定別確定表
- AT中1Gあたり純増/減少速度の直接公表値
- 設定変更/据え置き/電源OFF→ON時のSモード/Gモード状態・残P処理
- 本機固有のガックン/朝一変更判別

## conflicts

- 機械割: pacnk 96.8〜108.5%に対し、後年回顧資料に96.5〜108.8%との小差あり。平均化せずpacnk値をANALYSIS_SINGLEとして保持。

## QA note

- v0.7 resetBehaviorを遡及追加。
- Sモード最大130P・BIG後必ず突入、Gモードの存在は高信頼解析で確認できたが、設定変更/据え置き/電断時の内部AT状態・残P処理は十分再探索後も公開根拠を確定できずUNVERIFIED。
- 有利区間はNOT_APPLICABLE。設定変更専用の短縮天井/朝一恩恵/変更判別数値はNONE_CONFIRMED。
