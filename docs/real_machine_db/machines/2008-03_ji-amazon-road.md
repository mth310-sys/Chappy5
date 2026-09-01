# ジアマゾンロード

machineName: ジアマゾンロード
manufacturer: ラスター（型式/製造） / ウィンネットテクノロジー（発売・販売）
modelName: ジ アマゾンロード
releaseDate: 2008-03
releaseDateConfidence: ANALYSIS_HIGH_MONTH / UNVERIFIED_EXACT_DAY
releaseDateNote: 5号機クロニクル、パチンコFAN系DB、スロリスクタイム等で2008年3月導入が一致。2008-02-13にウィンネットテクノロジーがプレス発表会を開催した当時業界記事も確認したが、具体的な全国導入開始日は現存資料で確定できず月精度で保持する。
generation: 5号機初期
systemType: ボーナス + RT/ART（激アマゾーン。CZ経由・次回ボーナスまで継続）
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## 性能コア

payoutRateBySetting:
- sourceA_pachimagaSimulation: `97.17 / 99.08 / 100.27 / 103.22 / 105.07 / 107.58%`
- sourceB_5gokiChronicle: `96.0 / 98.0 / 100.5 / 103.7 / 106.9 / 112.0%`
- status: CONFLICT
- note: 特に設定6が107.58%と112.0%で大きく異なる。定義差または資料差の可能性があるため平均化しない。

initialHitBySetting:
- プレミアムBIG: `1/32768.00 / 1/32768.00 / 1/21845.33 / 1/21845.33 / 1/16384.00 / 1/16384.00`
- BIG（赤7）: `1/819.20 / 1/809.09 / 1/799.22 / 1/789.59 / 1/780.19 / 1/771.01`
- MID（白7）: `1/414.78 / 1/417.43 / 1/422.81 / 1/425.56 / 1/431.16 / 1/434.01`
- SHORT赤赤白: 全設定 `1/546.13`
- SHORT赤赤黒: 全設定 `1/546.13`
- BIG&MID合成: 全設定 `1/273.07`
- SHORT合成: 全設定 `1/273.07`
- 全ボーナス合成: 全設定 `1/136.53`
- note: パチマガスロマガ、5号機クロニクル、pacnkの設定判別資料で主要値が整合。

baseGamesPer50:
- UNVERIFIED_AFTER_RESEARCH
- note: `50枚 / 1000円 / ベース / コイン持ち / 通常時ゲーム数` と表記を変えて再探索したが、比較可能な公開値を確定できず。

netIncrease:
- 激アマゾーン 1〜100G: 約+0.5枚/G
- 激アマゾーン 101G以降: 約+1.0枚/G
- RT/ART終了条件: ボーナス成立まで
- note: K-Naviの現存解析ページで直接確認。100G経過後にナビ性能が上がる同一RT内の段階変化。

basicPayout:
- BIG: 350枚超払い出し終了 / 純増約240枚
- MID: 140枚超払い出し終了 / 純増約99枚
- SHORT: 60枚超払い出し終了 / 純増約56枚
- retrospectiveApproximation: BIG約250枚 / MID約100枚 / SHORT約50枚という後年回顧値もあるが、物差しでは当時解析の約240/99/56枚を主値とする。

modeSpecificMinimumData:
- CZ「激アマタイム」中に特殊リプレイ入賞でRT/ART「激アマゾーン」へ。
- 激アマゾーンはボーナス成立まで継続。
- プレミアムBIG当選時はボーナス7回以上が確定する旨をK-Navi/当時業界発表で確認。
- 通常時にはゲーム数による救済CZ/ARTストック契機が存在。
- 天井は5段階。現存P-WORLD掲示板では第一帯 `575〜625G` から最深帯 `975〜1025G` とされ、後年整理資料では `575〜1025Gの5段階（平均約800G）`。回顧資料では中心値を600/700/800/900/1000Gと表現している。
- 天井到達時はARTストック最低1個が確定する整理資料を確認。

## resetBehavior (mission v0.7)

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
gameCounterReset: UNVERIFIED_AFTER_RESEARCH
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
modeAfterReset: UNVERIFIED_AFTER_RESEARCH
stateAfterReset: UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE
resetBenefits: NONE_CONFIRMED
resetPenalties: NONE_CONFIRMED
resetDetection: UNVERIFIED_AFTER_RESEARCH
numericResetData: NONE_CONFIRMED

### resetBehavior 調査メモ

- 本機には5段階のゲーム数救済契機が存在するため、朝一の内部ゲーム数引継ぎ/リセットはホール経営・客AI上重要だが、設定変更時に天井ゲーム数/内部ゲーム数を初期化するか、再抽選するか、据え置きでそのまま引き継ぐかを断定できる本機固有資料は確認できなかった。
- `ジアマゾンロード / ジ アマゾンロード / アマゾンロード / ラスター / ウィンネット` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 天井 / 575 / 1025 / ガックン` を組み替え、K-Navi、P-WORLD掲示板、パチマガスロマガ、旧DB、5号機クロニクル、当時業界史/回顧資料を横断。
- 電源OFF→ON単独時の天井カウンタ・高確/超高確・CZ・RT/ARTストック処理も直接根拠なし。
- ガックン、初期出目、液晶表示等による本機固有の変更判別資料も確認できず。
- 設定変更固有の朝一恩恵/不利、公開されたリセット時モード振り分け・短縮天井数値は確認できないため `NONE_CONFIRMED`。一般論から補完しない。
- 有利区間制度導入前の5号機のため `advantageousSectionReset: NOT_APPLICABLE`。

## conflicts

- CONFLICT_PAYOUT_RATE: パチマガスロマガのシミュレート機械割 `97.17〜107.58%` と5号機クロニクル `96.0〜112.0%` が競合。特に設定6の差が大きいため平均化しない。
- MANUFACTURER_ATTRIBUTION_NOTE: 検定/型式側ではラスター、当時プレス発表・攻略サイトではウィンネットテクノロジー発売として扱われる。別機種とはみなさず役割を分けて併記。
- CEILING_EXPRESSION_NOTE: P-WORLD当時掲示板系の `575〜625G ... 975〜1025G` と、後年回顧の `600/700/800/900/1000G` は、中心値と実発動帯の表現差である可能性が高いが、原資料の全振り分けを確定できないため双方を残す。

## missingFields

- 50枚あたりゲーム数/通常ベース
- 全国導入開始の具体日
- 設定変更時の天井/内部ゲーム数処理
- 据え置き時の天井/高確/CZ/RT・ARTストック引継ぎ
- 電源OFF→ONのみの内部状態処理
- 設定変更固有の朝一恩恵・不利・公開数値
- ガックン/初期出目等による変更判別

## sources

取得日: 2026-09-01

1. プレイグラフ転載「ウィンネットが新機種『ジ アマゾンロード』」 — 2008-02-13プレス発表、ART→RT→ボーナス構造、発売主体確認
   https://p-mans.blogspot.com/2008/02/
   confidence: INDUSTRY
2. パチマガスロマガ「ジアマゾンロード」基本システム — 払い出し条件、純増約240/99/56枚、RT/ART構造
   https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/04/a.php
   confidence: ANALYSIS_HIGH
3. パチマガスロマガ「ジアマゾンロード」ボーナス抽選確率 — 設定別ボーナス確率、シミュレート機械割97.17〜107.58%
   https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/04/h.php
   confidence: ANALYSIS_HIGH
4. K-Navi「ジ アマゾンロード」 — 払い出し終了条件、プレミアムBIG、CZ/RT概要
   https://p-kn.com/slot/782/
   confidence: ANALYSIS_HIGH
5. K-Navi「激アマゾーン(RT)」 — 100Gまで約+0.5枚/G、101G以降約+1.0枚/G、ボーナス成立まで継続
   https://p-kn.com/slot/782/5253/
   confidence: ANALYSIS_HIGH
6. 5号機クロニクル「ウィンネットテクノロジー」 — 2008/3、設定別各ボーナス確率、機械割96.0〜112.0%
   https://5goki.com/winnet
   confidence: ANALYSIS_SINGLE
7. P-WORLD「ジアマゾンロード」/掲示板 — ラスター表記、当時天井議論で575〜625Gから975〜1025Gまでの5段階を確認
   https://www.p-world.co.jp/machine/database/5111
   https://www.p-world.co.jp/kisyubbs/bbs.cgi?file=p5111
   confidence: ARCHIVE_SUPPORT
8. パチンコFAN pacnk「ジアマゾンロード 設定判別ツール」 — 2008年3月、BIG/MID確率、575〜1025Gの5段階天井・平均約800Gの整理
   https://pacnk.com/slot/tools/sh_amz.html
   confidence: ANALYSIS_SINGLE
9. パチスロ業界初まとめ — 2008-02-19時点でラスター検定通過/ウィンネット発売、天井CZ存在機種として記録
   https://slothistory.com/kousin_kako04.html
   https://slothistory.com/kousin_kako05.html
   confidence: INDUSTRY_ARCHIVE
10. 回顧「思い出のパチスロ名機 ジアマゾンロード」 — ボーナス値、実獲得目安、RT段階純増、天井中心値600/700/800/900/1000の補助資料
   https://ameblo.jp/amebunqaz/entry-12832437295.html
   confidence: RETROSPECTIVE_SUPPORT

## quality

performanceCoreConfidence: ANALYSIS_HIGH_WITH_PAYOUT_CONFLICT
resetBehaviorConfidence: UNVERIFIED
recordStatus: PARTIAL / RESET_PARTIAL
