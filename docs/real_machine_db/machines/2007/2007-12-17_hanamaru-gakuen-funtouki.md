# ハナマル!学園奮闘記!

machineName: ハナマル!学園奮闘記!
manufacturer: アビリット（現コナミアミューズメント系）
releaseDate: 2007-12-17
generation: 5号機
systemType: ボーナス+ART / 1ライン / 赤7後長時間ART+ハマリ救済ART
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## identification

- 2007-11-22付グリーンべるとでアビリット新機種として発表、納品は2007-12-16からと確認。
- 2007-11-28付K-Navi内覧会記事でホール導入予定日は2007-12-17と確認。本DBはホール導入基準のため `2007-12-17` を採用し、前日12/16を納品開始日として併記する。
- HAZUSE DATAでもメーカーをアビリットとして確認。
- 後年の5号機クロニクルは旧社名・ブランド期を現コナミアミューズメント系として集約しているため、メーカー表記は当時のアビリットを主とする。

## payoutRateBySetting

HAZUSE DATA掲載値:

| 設定表記 | PAY OUT |
|---|---:|
| 1 | 95% |
| 2 | 99% |
| 5 | 105% |
| 6 | 111% |

信頼度: `ANALYSIS_SINGLE`。

ただし設定構成について、HAZUSE DATAは `1 / 2 / 5 / 6`、当時グリーンべるとは `1 / 2 / 4 / 6` の4段階設定と記載しており、設定5と設定4の表記が競合する。数値を勝手に移し替えず `CONFLICT_SETTING_LABEL` として保持する。

## initialHitBySetting

HAZUSE DATA掲載:

| 設定表記 | BIG | REG | 合成 |
|---|---:|---:|---:|
| 1 | 1/390.1 | `UNVERIFIED_AFTER_RESEARCH` | 1/282.5 |
| 2 | 1/364.1 | 1/819.2 | 1/252.1 |
| 5 | 1/329.3 | 1/675.6 | 1/221.4 |
| 6 | 1/302.0 | 1/458.3 | 1/182.0 |

P-WORLDとグリーンべるとは合成の端点 `1/282.5（設定1）〜1/182.0（設定6）` を照合。

設定1 REGは合成値から逆算可能ではあるが、本DBは推定値を元データへ入れないため逆算せず欠損のまま保持する。

信頼度: `ANALYSIS_SINGLE`（端点合成のみ複数ソース一致）。

## baseGamesPer50

`UNVERIFIED_AFTER_RESEARCH`。

`ハナマル!学園奮闘記! / ハナマル学園奮闘記 / アビリット / 50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数` を組み替え、当時業界記事、HAZUSE、P-WORLD、旧DB、後年回顧を横断したが、比較可能な直接数値を確定できなかった。

## netIncrease

- ART「ハナマルタイム」: 約 `+0.4枚/G`。
- 赤7ボーナス後に2000GのARTへ突入。グリーンべるとは2000G消化後もボーナス非成立なら救済ARTへ移る仕様と説明。
- K-Naviは赤7後を「無限ART」と要約しているが、グリーンべると/HAZUSEの詳細では厳密には2000G ART + その後救済ARTで、実質ボーナス成立まで継続する構造。

信頼度: `INDUSTRY`。

## basicPayout

- 各ボーナスの獲得枚数: 約240枚。
- グリーンべるとで4種類のボーナス、各約240枚を確認。
- K-Naviも4種類のボーナス、どのボーナスも純増枚数がほぼ同じと説明。

信頼度: `INDUSTRY`。

## modeSpecificMinimumData

- 3枚掛け1ライン機。
- 赤7ボーナス後: ART「ハナマルタイム」へ。厳密には2000G ARTで、その後もボーナス非成立なら救済ARTへ移るため実質ボーナス成立まで継続。
- 赤7以外のボーナス後: 870Gハマリで救済ART発動。
- ART中はパンク図柄なし、ボーナス当選で終了。
- ART純増は約+0.4枚/G。
- 通常時の全小役抽選・演出詳細は物差し用途外のため収録しない。

## resetBehavior

### settingChangeBehavior

`UNVERIFIED_AFTER_RESEARCH`。

`ハナマル!学園奮闘記! / ハナマル学園奮闘記 / アビリット` と `設定変更 / リセット / 朝一 / RAM / 870G / ART / 救済ART` を組み替え、当時業界記事、P-WORLD、HAZUSE、K-Navi、旧DB、回顧資料を横断したが、設定変更時に870G救済カウンタ、ART状態、内部状態をどう処理するかを直接説明する本機固有資料を確定できなかった。

### carryOverBehavior

`UNVERIFIED_AFTER_RESEARCH`。

据え置き時に870G救済ARTまでのゲーム数、ART残状態を引き継ぐかを直接説明する本機固有資料は確認できなかった。

### powerCycleBehavior

`UNVERIFIED_AFTER_RESEARCH`。

電源OFF→ONのみの場合の870G救済カウンタ、ART状態、初期出目等の処理は確認できなかった。

### gameCounterReset

- 通常時には赤7以外のボーナス後 `870G` ハマリで救済ART発動というゲーム数条件が存在: `CONFIRMED`。
- 赤7後ARTは2000G経過後もボーナス未成立なら救済ARTへ移行: `CONFIRMED`。
- 設定変更時にこれらのゲーム数がリセットされるか: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き / 電源OFF→ONでの引継ぎ: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常時救済ART条件: 赤7以外のボーナス後870Gハマリで発動。
- 設定変更時の短縮天井 / 朝一専用天井: `NONE_CONFIRMED`。
- 設定変更時に870G条件がどの起点から数え直されるかは `UNVERIFIED_AFTER_RESEARCH`。

### modeAfterReset

朝一専用モード、設定変更専用モード再抽選、公開モード振り分け: `NONE_CONFIRMED`。

通常時の全内部モード解析は物差し用途外であり、後継機・他機種の仕様を流用しない。

### stateAfterReset

ART搭載機のため該当。

設定変更 / 据え置き / 電源OFF→ON時にART状態、救済ART状態、ボーナス後起点状態をどう処理するかは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

`NOT_APPLICABLE`（2007年5号機、有利区間制度前）。

### resetBenefits

設定変更時のみの短縮天井、朝一ART確定、高状態スタート等の主要恩恵: `NONE_CONFIRMED`。

### resetPenalties

設定変更時のみの主要な不利要素: `NONE_CONFIRMED`。

### resetDetection

ガックン、初期出目、ランプ、870G挙動等による本機固有の設定変更/据え置き判別法: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

設定変更時のみの短縮天井G数、朝一当選率、モード振り分け、リセット恩恵発生率など比較可能な公開朝一数値: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. グリーンべると — 『CRパタリロ』と『ハナマル学園奮闘記』発表
   - https://web-greenbelt.jp/00004386/
   - 2007-11-22掲載。アビリット、納品2007-12-16から、4ボーナス、赤7後2000G ART、+0.4枚/G、870G救済ART、各約240枚、設定構成表記。
   - reliability: INDUSTRY
2. K-Navi — アビリット内覧会
   - https://p-kn.com/topics/exhibition/214/
   - 2007-11-28掲載。ホール導入予定2007-12-17、赤7後実質無限ARTの構造概要。
   - reliability: INDUSTRY
3. P-WORLD — ハナマル!学園奮闘記!
   - https://www.p-world.co.jp/machine/database/4999
   - 合成1/282.5〜1/182.0、赤7後2000G ART、+0.4枚/G、870G救済ART、各約240枚。
   - reliability: ANALYSIS_HIGH
4. HAZUSE DATA — ハナマル!学園奮闘記!
   - https://data.hazuse.com/?machine_code=7S0431
   - メーカーアビリット、設定別BIG/REG/合成/PAY OUT、ART構造。
   - reliability: ANALYSIS_SINGLE
5. 5号機クロニクル — コナミアミューズメント（高砂電器・アビリット）全機種一覧
   - https://5goki.com/konami
   - 旧社名・ブランド期を含むメーカー系譜確認用。
   - reliability: ANALYSIS_SINGLE
6. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 2007年当時保存更新で870G救済ARTを「ハナマル」の語呂合わせ天井として記録。
   - reliability: INDUSTRY_ARCHIVE

## missingFields

- 正式型式名 / 検定型式
- 50枚あたりゲーム数 / 1000円ベース
- 設定1 REG確率の直接掲載値
- 設定変更 / 据え置き / 電源OFF→ON時の870G救済カウンタ処理
- 設定変更 / 据え置き / 電断時のART / 救済ART状態処理
- 本機固有の設定変更判別法

## conflicts

- 設定構成: 当時グリーンべるとは `1 / 2 / 4 / 6` の4段階、HAZUSE DATAは性能表を `1 / 2 / 5 / 6` として掲載。どちらかへ補正せず `CONFLICT_SETTING_LABEL`。
- 赤7後ARTの表現: K-Naviは「無限ART」と要約、グリーンべると/HAZUSEは2000G ART終了後に救済ARTへ移る構造として説明。実質継続性は整合するため、構造差ではなく表現粒度差として保持。
