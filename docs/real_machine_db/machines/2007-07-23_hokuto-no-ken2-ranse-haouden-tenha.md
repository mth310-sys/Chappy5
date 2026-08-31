# パチスロ北斗の拳2 乱世覇王伝 天覇の章

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: パチスロ北斗の拳2 乱世覇王伝 天覇の章
manufacturer: サミー
typeName: 北斗の拳2G
releaseDate: 2007-07-23
generation: 5号機
systemType: ボーナス + RT（覇王モード / パンク回避型・減少型RT）

## releaseDate evidence

- セガサミーグループ資料: 2007年7月より発売。
- 2007-07-20サミーネットワークス発表: 777タウン体験版を「ホール導入に先駆けて」7月20日に配信。
- 2007-07-23当時掲示板ログ: 「本日からホールに登場」と同日投稿。日単位の一次業界資料は今回確認できなかったため、具体日は当時同時代記録を補助根拠として採用。
- グリーンべると2007-07-06記事では「納品は各公安委員会の検定通過次第」とされ、固定全国納品日の記載なし。

releaseDateの日単位精度はANALYSIS_SINGLE相当。月単位2007-07はOFFICIAL/INDUSTRYで高信頼。

## payoutRateBySetting

### 必勝本 シミュレート値

| 設定 | 機械割 |
|---|---:|
| 1 | 96.73% |
| 2 | 96.85% |
| 3 | 97.17% |
| 4 | 99.29% |
| 5 | 102.90% |
| 6 | 106.83% |

### パチマガスロマガ シミュレート値

| 設定 | PAYOUT |
|---|---:|
| 1 | 96.90% |
| 2 | 96.98% |
| 3 | 97.33% |
| 4 | 99.51% |
| 5 | 103.24% |
| 6 | 107.25% |

後年パチ7掲載値 96.7 / 96.9 / 97.2 / 99.3 / 102.9 / 106.8% は必勝本系列と丸めレベルで整合。パチマガ系とは小差があるため平均せずCONFLICTとして両系列を保持。

信頼度: CONFLICT（ANALYSIS_HIGH同士のシミュレート差）

## initialHitBySetting

### BIG合成

| 設定 | 確率 |
|---|---:|
| 1 | 1/336.08 |
| 2 | 1/334.37 |
| 3 | 1/332.67 |
| 4 | 1/321.25 |
| 5 | 1/306.24 |
| 6 | 1/296.54 |

### MID

| 設定 | 確率 |
|---|---:|
| 1 | 1/789.59 |
| 2 | 1/789.59 |
| 3 | 1/789.59 |
| 4 | 1/682.67 |
| 5 | 1/590.41 |
| 6 | 1/512.00 |

### ボーナス合成

| 設定 | 確率 |
|---|---:|
| 1 | 1/235.74 |
| 2 | 1/234.90 |
| 3 | 1/234.06 |
| 4 | 1/218.45 |
| 5 | 1/201.65 |
| 6 | 1/187.78 |

パチマガスロマガとパチスロ必勝本で精密値が一致。K-Naviの基本ページは一部丸め/表示差があるため精密主値には用いない。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

`北斗の拳2G / 北斗2G / 北斗の拳2乱世覇王伝天覇の章 / サミー` と `50枚 / 1000円 / 1k / ベース / コイン持ち / 通常時` を組み替え、当時業界記事、旧攻略、P-WORLD、K-Navi、パチマガスロマガ、必勝本、後年回顧資料を横断したが、通常時50枚あたりゲーム数の比較可能な公開値は今回確定できなかった。

※RT中50枚あたりコイン持ちは後年回顧で設定1〜6: 95.6 / 95.6 / 95.6 / 96.4 / 99.9 / 103.6Gと公開されているが、通常時ベースではないため混在させない。

## netIncrease

RT「覇王モード」: 約-0.5枚/G（減少型RT）。

- パチ7回顧資料でRT中約0.5枚/G減、RT中50枚あたり設定1〜6で約95.6〜103.6Gと掲載。
- 後継機NextZone闘の2008年グリーンべると記事でも、前作からの変更点として「RT中のベースアップ」とされ、前作RTが低ベースだったことを裏付ける。
- RTはボーナス後に必ず突入し、継続率管理。最大500G。

信頼度: ANALYSIS_HIGH / INDUSTRY_SUPPORT

## basicPayout

- BIG: 平均約230枚
- MID: 平均約104枚

パチスロ必勝本で解析値として掲載。後年パチ7もBIG平均230枚/MID104枚で一致。2008年グリーンべるとが後継NextZone闘について「前作BIG純増約225枚」と記すためBIGは約225〜230枚の表現差があるが、解析平均値の主記録は230枚とする。

信頼度: ANALYSIS_HIGH（BIG約225/230枚は定義・丸め差注記）

## modeSpecificMinimumData

- 全ボーナス終了後にRT「覇王モード」へ突入。
- RT継続率は50 / 60 / 70 / 80 / 90 / 95%の6段階。
- RT1セットは基本20〜100G帯で、最大500Gまで継続。
- チェリー入賞がRT終了契機となるパンク回避型。
- 北斗揃いBIGは高継続RTの期待が高い。細かな振り分けは物差し用途外なので収集しない。
- 通常時にゲーム数到達型のボーナス天井/救済RTがあるという高信頼資料は今回確認できず、通常時天井はNONE_CONFIRMED。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `北斗の拳2G / 北斗2G / 北斗の拳2乱世覇王伝 / サミー` と `設定変更 / リセット / 朝一 / 初期化 / モード / RT / 覇王モード / ガックン` を組み替え、当時攻略・業界記事・旧DB・後年回顧を再探索。
- 設定変更時に通常時内部モード、成立済みRT状態、RT継続管理をどう初期化するかを本機固有の高信頼資料で確定できずUNVERIFIED。

carryOverBehavior:
- 据え置き時の通常時内部モード、RT継続状態の朝一引継ぎを明示した本機固有資料は今回確定できずUNVERIFIED。
- 通常時ゲーム数天井が確認されないため、宵越し天井狙いに相当する主要恩恵はNONE_CONFIRMED。

powerCycleBehavior:
- 電源OFF→ONのみの場合の通常内部モード/RT状態保持を直接示す本機固有高信頼資料はUNVERIFIED。

 gameCounterReset:
- 通常時のゲーム数到達型天井・救済RTは十分再探索した範囲でNONE_CONFIRMED。
- よって通常時天井カウンタの設定変更リセット/据え置き引継ぎに該当する公開比較値なし。

ceilingAfterReset:
- 設定変更後の短縮天井・専用天井はNONE_CONFIRMED。

modeAfterReset:
- 通常時にはボーナス成立時のRT継続率決定へ影響する内部モードの存在が解析されているが、設定変更時の再抽選/初期モード振り分けは今回高信頼で確定できずUNVERIFIED。
- 朝一専用モードはNONE_CONFIRMED。

stateAfterReset:
- RT「覇王モード」中やチャンスタイム中の設定変更/据え置き/電断時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の天井短縮、朝一RT、朝一ボーナス/CZ優遇などはNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、液晶/ランプ、RT挙動等を用いた設定変更/据え置き判別は、検索語を変えて再探索したが高信頼で確定できずUNVERIFIED。

numericResetData:
- 設定変更時専用の公開モード振り分け、短縮天井、朝一当選率、リセット恩恵発生率: NONE_CONFIRMED
- 通常時ゲーム数天井: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. セガサミーホールディングス 株主通信 / 2008年2Q
   - https://www.segasammy.co.jp/cms/wp-content/uploads/pdf/ja/ir/2008_2q_stockholder.pdf
   - 2007年7月より発売、5号機北斗シリーズ、覇王モードを確認
   - reliability: OFFICIAL
2. グリーンべると — 5号機『北斗の拳』はラオウが主役（2007-07-06）
   - https://web-greenbelt.jp/00004265/
   - 型式名北斗の拳2G、機種概要、納品は各公安委員会の検定通過次第
   - reliability: INDUSTRY
3. 4Gamer / サミーネットワークス発表（2007-07-20）
   - https://www.4gamer.net/games/021/G002122/20070720125529/
   - 7月20日体験版はホール導入に先駆けて配信と確認
   - reliability: OFFICIAL_REPRINT / INDUSTRY
4. パチスロ北斗系当時掲示板ログ（2007-07-23投稿）
   - https://hokutosite.com/hokusai/bbs_log/bbslog_2007.html
   - 7月23日に「本日からホールに登場」とする同時代記録。具体日補助のみ
   - reliability: ANALYSIS_SINGLE / COMMUNITY_SUPPORT
5. パチマガスロマガ — 北斗の拳2 乱世覇王伝天覇の章
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/109/h.php
   - 設定別BIG/MID/ボーナス合成精密値、シミュレートPAYOUT
   - reliability: ANALYSIS_HIGH
6. パチ＆スロ必勝本 — 基本スペック 北斗の拳2
   - https://p.hisshobon.jp/machine/list.php?c=1&d=14600&mid=929&p=2
   - 設定別ボーナス確率、機械割シミュレート値、BIG平均230枚/MID104枚、全ボーナス後RT
   - reliability: ANALYSIS_HIGH
7. K-Navi — パチスロ北斗の拳2
   - https://p-kn.com/slot/601/
   - ボーナス+RT構造、設定別確率の丸め値、攻略構造
   - reliability: ANALYSIS_HIGH
8. パチ7 — 北斗設定6祭～覇王は先生～
   - https://pachiseven.jp/articles/detail/10788
   - 後年回顧。機械割、RT約-0.5枚/G、RT中50枚あたりゲーム数、BIG約230枚/MID104枚、RT最大500G
   - reliability: ANALYSIS_HIGH / RETROSPECTIVE
9. グリーンべると — 『北斗の拳』最新シリーズ、2機種デビュー（2008-02-01）
   - https://web-greenbelt.jp/00003486/
   - 後継NextZone闘の前作比較として、前作BIG純増約225枚、RT中ベース改善を確認
   - reliability: INDUSTRY

## missingFields

- 通常時baseGamesPer50
- 設定変更時の内部モード/RT状態処理
- 据え置き時の内部モード/RT状態処理
- 電源OFF→ONのみの内部状態処理
- 本機固有の変更判別/ガックン情報

## conflicts

- 機械割: 必勝本 96.73〜106.83% とパチマガスロマガ 96.90〜107.25%。平均せず双方保持。
- BIG獲得枚数: 解析平均約230枚に対し2008年業界記事の前作説明は約225枚。約値/定義差として双方注記。
- releaseDateの日単位: 公式/業界は2007年7月まで高信頼。2007-07-23は同時代コミュニティ記録による補助具体日であり、全国一律導入日を意味しない。
