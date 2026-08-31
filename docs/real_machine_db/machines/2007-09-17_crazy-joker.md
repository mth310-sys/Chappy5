# クレイジージョーカー

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: クレイジージョーカー
manufacturer: 清龍ゲームジャパン
releaseDate: 2007-09-17
generation: 5号機
systemType: ノーマル / ボーナス主体 / 完全告知

## releaseDate evidence

- グリーンべると/P-WORLD業界ニュース（2007-08-24）で、清龍ゲームジャパンが2007-08-20に本機とトリプルクラウンS2-30を発表し、**両機種とも2007-09-17より納品**と明記。
- 5号機クロニクル、pacnkでも2007年9月導入を確認。
- 本DBでは具体納品開始日を `2007-09-17` とする。

信頼度: INDUSTRY

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.00% |
| 2 | 98.00% |
| 3 | 100.18% |
| 4 | 103.02% |
| 5 | 105.17% |
| 6 | 107.15% |

- pacnk掲載値。
- 5号機クロニクルは丸めて `96.0 / 98.0 / 100.2 / 103.0 / 105.2 / 107.2%` と掲載し、実質一致。
- 丸め差のためCONFLICT扱いしない。

信頼度: ANALYSIS_HIGH / CORROBORATED

## initialHitBySetting

| 設定 | BIG | CHALLENGE BONUS(CB) | 合算 |
|---|---:|---:|---:|
| 1 | 1/344.90 | 1/595.80 | 約1/218.45 |
| 2 | 1/331.00 | 1/574.90 | 約1/210.06 |
| 3 | 1/318.10 | 1/555.40 | 約1/202.26 |
| 4 | 1/306.20 | 1/512.00 | 約1/191.61 |
| 5 | 1/295.20 | 1/496.50 | 約1/185.13 |
| 6 | 1/284.90 | 1/481.90 | 約1/179.05 |

- BIG/CBはpacnk掲載値。
- 合算は上記公開BIG/CB確率から計算した派生値で、元確率と定義を分けて保持。
- 後年回顧資料の合算 `1/218.4〜1/179.0` と整合。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

- `クレイジージョーカー / 清龍ゲームジャパン` と `1000円 / 50枚 / コイン持ち / ベース / 通常時ゲーム数` を組み替え、パチマガスロマガ、K-Navi、pacnk、5号機クロニクル、当時業界記事、古いDB/回顧資料を横断したが、比較可能な50枚ベース数値を今回確定できず `UNVERIFIED`。
- 小役確率からの推定値は作らない。

信頼度: UNVERIFIED

## netIncrease

- RT/ART/ATによる継続的な出玉増加機能は確認されない。
- ノーマルタイプの完全告知機として扱う。

信頼度: ANALYSIS_HIGH

## basicPayout

パチマガスロマガ / グリーンべると / K-Navi:
- BIG: 345枚を超える払い出しで終了、純増約312枚。
- CHALLENGE BONUS: 195枚を超える払い出しで終了、純増約182枚。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 完全告知タイプ。
- 小役との同時当選を搭載。
- グリーンべるとによれば、スタート音の遅れや「ネジリ目」などを搭載。
- 通常時天井はpacnkで「非搭載」と確認。
- RT/ART/AT、通常時ゲーム数モードは確認されない。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `クレイジージョーカー / 清龍ゲームジャパン / 清龍 / CRAZY JOKER` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 出目 / 告知ランプ` を組み替え、当時解析・業界記事・旧DB・後年資料を横断。
- 設定変更時に専用モード・状態・ゲーム数恩恵が発生するという直接資料は確認できず `NONE_CONFIRMED`。
- 本機固有の設定変更時リール挙動や初期出目処理は十分な直接資料がなく `UNVERIFIED`。

carryOverBehavior:
- 通常時天井が非搭載で、RT/ART/AT状態も確認されないため、宵越し天井ゲーム数の引継ぎ対象は `NOT_APPLICABLE`。
- 据え置き時に引き継ぐべき公開モード/状態も `NONE_CONFIRMED`。

powerCycleBehavior:
- 電源OFF→ONのみで変化する天井・モード・RT/ART状態は確認されない。
- 本機固有の初期出目/ランプ挙動は `UNVERIFIED`。

gameCounterReset:
- 通常時天井非搭載のため、天井ゲーム数カウンタのリセット/引継ぎは `NOT_APPLICABLE`。

ceilingAfterReset:
- 通常時天井: `NONE / NOT_APPLICABLE`。
- リセット専用短縮天井: `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード、設定変更専用モード、モード振り分けは `NONE_CONFIRMED`。

stateAfterReset:
- ホール経営/朝一狙いに影響する公開内部状態の再抽選・引継ぎは `NONE_CONFIRMED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機・有利区間制度導入前）。

resetBenefits:
- 設定変更/朝一専用の天井短縮、当選率上昇、CZ/RT優遇等は `NONE_CONFIRMED`。

resetPenalties:
- 設定変更固有の公開不利要素は `NONE_CONFIRMED`。

resetDetection:
- 本機固有のガックン、出目、告知ランプ等による変更/据え置き判別は、検索語・資料系統を変えて再探索したが高信頼資料を確定できず `UNVERIFIED`。

numericResetData:
- 通常時天井: NONE
- リセット短縮天井: NONE_CONFIRMED
- 朝一専用モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-09-01

1. P-WORLD / グリーンべると — 『トリプルクラウン』の清龍から全国発売第1弾（2007-08-24）
   - https://news.p-world.co.jp/articles/2349/greenbelt
   - 清龍ゲームジャパン、2007-09-17納品開始、完全告知、小役同時当選、BIG約312枚、CB約182枚。
   - reliability: INDUSTRY
2. パチマガスロマガ — クレイジージョーカー 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/01/a.php
   - ノーマル/同時成立/完全告知、BIG約312枚、CB182枚。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — クレイジージョーカー 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/01/seiryu_slot_01.php
   - 当時解析メニュー、ヤメ時「特にナシ」。
   - reliability: ANALYSIS_HIGH
4. K-Navi — クレイジージョーカー
   - https://p-kn.com/slot/639/
   - 5号機ノーマル系、BIG345枚超/CB195枚超払い出し終了条件、完全告知機概要。
   - reliability: ANALYSIS_SINGLE
5. pacnk — クレイジージョーカー設定判別ツール
   - https://pacnk.com/slot/tools/sh_kureijijoka.html
   - 設定別BIG/CB/PAYOUT、天井非搭載。
   - reliability: ANALYSIS_SINGLE
6. 5号機クロニクル — 清龍ゲームジャパン5号機全機種一覧
   - https://5goki.com/seiryu
   - 2007/9導入、設定別機械割96.0〜107.2%。
   - reliability: SECONDARY_DB

## missingFields

- baseGamesPer50
- 本機固有の設定変更時リール/初期出目挙動
- 本機固有のガックン等による変更判別
- 電源OFF→ONだけで生じる外見上の判別要素

## conflicts

- 機械割の `100.18/103.02/105.17/107.15%` と `100.2/103.0/105.2/107.2%` は丸め精度差と判断し、CONFLICT扱いしない。

## notes

- 本機は2007-09-17納品開始が当時業界記事で確定しており、166件地点までの既存キューで漏れていたため遡及追加。
- 同時発表・同日納品の `トリプルクラウンS2-30` は5号機クロニクルでは2007/10表記もあるため、別レコード登録前にホール導入/稼働開始時期の定義差を再監査する。
