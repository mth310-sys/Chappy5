# マジックモンスター2

status: COMPLETE_CORE_WITH_CONFLICT
qaResetBehavior: PARTIAL

machineName: マジックモンスター2
formalModel: UNVERIFIED（P-WORLD現存DBは型式名空欄）
manufacturer: オリンピア
releaseDate: 2007-10-22（ホール導入予定/ホールデビュー）
generation: 5号機初期
systemType: ボーナス + CZ + 100G完走型RT「進級試験」

## releaseDate evidence

- K-Naviの2007-09-26発表展示会記事で、ホール導入日を2007-10-22予定と明記。
- ITmedia Mobileは2007-10-23記事で、10月22日に「マジックモンスター2」のホールデビュー記念キャンペーンを開始したと報道。
- P-WORLDは導入開始を2007年10月と記録。

信頼度: INDUSTRY / CONTEMPORARY_MEDIA / DATABASE

## payoutRateBySetting

パチマガスロマガ:
- 設定1: 96.5%
- 設定2: 98.3%
- 設定3: 100.4%
- 設定4: 103.6%
- 設定5: 107.8%
- 設定6: 114.3%

PACNK / A-SLOT系:
- 設定1: 96.5%
- 設定2: 98.3%
- 設定3: 100.4%
- 設定4: 103.8%
- 設定5: 107.8%
- 設定6: 114.3%

5号機クロニクル:
- 設定1: 97.3%
- 設定2: 99.2%
- 設定3: 101.7%
- 設定4: 105.1%
- 設定5: 110.1%
- 設定6: 112.3%

設定4はパチマガスロマガ103.6%とPACNK/A-SLOT 103.8%で小差、5号機クロニクル系列は全設定で別系列。平均せず `CONFLICT` として保持する。

信頼度: ANALYSIS_HIGH / RETROSPECTIVE_MACHINE_DB / CONFLICT

## initialHitBySetting

パチマガスロマガ / PACNKでほぼ一致:

BIG合成:
- 設定1: 1/471.48（パチマガ丸め 1/472）
- 設定2: 1/471.48（1/472）
- 設定3: 1/431.16（1/431）
- 設定4: 1/425.56（1/426）
- 設定5: 1/360.09（1/360）
- 設定6: 1/352.34（1/352）

REG合成:
- 設定1: 1/1092.27（1/1092）
- 設定2: 1/1092.27（1/1092）
- 設定3: 1/1024.00（1/1024）
- 設定4: 1/992.97（1/993）
- 設定5: 1/862.32（1/862）
- 設定6: 1/819.20（1/819）

ボーナス合成:
- 設定1: 約1/329
- 設定2: 約1/329
- 設定3: 約1/303
- 設定4: 約1/298
- 設定5: 約1/254
- 設定6: 約1/246

信頼度: ANALYSIS_HIGH（複数解析系で整合）

## baseGamesPer50

- パチマガスロマガの実戦値: **41.66G / 1000円**。
- 設定別理論ベースではなく実戦サンプル値なので、物差しでは `observedRepresentative` として扱う。

信頼度: ANALYSIS_SINGLE_OBSERVED

## netIncrease

- RT「進級試験」: 100G完走型。
- A-SLOTは100G完走時に純増約70枚と説明しており、約+0.7枚/G相当。
- 後年シリーズ回顧資料でも約+0.7枚/Gとして一致。
- K-Naviの発表展示会記事でも100Gの完走・純増型RT搭載を確認。

netIncrease: 約 +0.7枚/G
rtBaseLength: 100G

信頼度: ANALYSIS_HIGH / RETROSPECTIVE_MACHINE_DB / INDUSTRY

## basicPayout

P-WORLD / パチマガスロマガで一致:
- SUPER BIG BONUS（赤7）: 平均約322枚（465枚超払い出し終了）
- BIG BONUS（青7）: 平均約223枚（320枚超払い出し終了）
- REGULAR BONUS: 平均約108枚（140枚超払い出し終了）

信頼度: DATABASE / ANALYSIS_HIGH

## modeSpecificMinimumData

- 全ボーナス終了後にCZへ突入。
- RT終了後にもCZへ突入。
- 通常状態ではCZ終了後120G消化で次のCZへ入る周期型。
- CZ中の条件成立で100G完走型RT「進級試験」へ突入。
- 赤7後CZはRT突入期待が非常に高く、青7後・REG/通常周期CZで期待度が異なるが、実機完全再現用の細かなCZ振り分けは本DB対象外。
- 通常ゲーム数天井は非搭載とする解析資料がある。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- PACNK現存解析は **「設定変更後はチャンスゾーンからスタート」** と明記。
- 当時スロ板テンプレにも「液晶は通常だが内部的にはCZ」とする記録が残るため、方向性は整合する。ただし掲示板テンプレは補助根拠に留める。
- 設定変更時に内部CZへ移ることは `CONFIRMED_ANALYSIS`。

carryOverBehavior:
- 通常時はCZ終了後120Gで次回CZへ入る周期構造。
- 据え置き時に周期残G/CZ状態をそのまま引き継ぐかについて、高信頼な直接記述は今回確定できず `UNVERIFIED`。
- 当時掲示板には120G以内のCZ出現を据え置き推測へ使う記述があるが、一次/高信頼解析としては採用しない。

powerCycleBehavior:
- 電源OFF→ONのみで周期残G、CZ/RT状態、液晶状態がどう処理されるか、本機固有の直接資料は `UNVERIFIED`。

gameCounterReset:
- 通常時のボーナス天井は `NONE_CONFIRMED / NO_CEILING`。
- 一方、通常状態はCZ終了後120Gで次CZへ入る周期を持つ。
- 設定変更時はCZからスタートするため、少なくとも通常周期カウンタは通常の継続位置ではなくCZ始点へ切り替わると整理できる。

ceilingAfterReset:
- ボーナス天井短縮: `NOT_APPLICABLE / NO_CEILING`。
- 設定変更直後CZスタートが朝一側の主要な差分。

modeAfterReset:
- 朝一専用モード/専用モード振り分け: `NONE_CONFIRMED`。
- 設定変更時は内部CZスタートを確認。

stateAfterReset:
- 設定変更時: 内部CZスタート `CONFIRMED_ANALYSIS`。
- RT中・ボーナス成立状態など特殊状態で設定変更した場合の個別処理は `UNVERIFIED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更直後からCZ状態で開始するため、通常周期120Gを待たずRT突入契機を得られる点は朝一の実質恩恵候補。
- RT突入率そのものが設定変更専用に優遇される数値は `NONE_CONFIRMED`。

resetPenalties:
- 設定変更時固有の公開不利要素: `NONE_CONFIRMED`。

resetDetection:
- 内部CZスタートのため、朝一のCZ挙動/2択チャレンジ等が変更推測材料になり得るという当時記録はある。
- ただし本機固有ガックン、初期出目、確定的液晶差、判別精度を示す高信頼資料は `UNVERIFIED`。
- よって `CZ挙動による推測材料あり（補助根拠） / ガックン等はUNVERIFIED` とする。

numericResetData:
- 設定変更後: CZスタート（確率ではなく状態確定の解析記述）。
- 通常時CZ周期: CZ終了後120G。
- リセット専用モード振り分け/短縮天井G/朝一当選率: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. K-Navi — パチスロ新機種『マジックモンスター2』発表展示会
   - https://p-kn.com/topics/news/362/
   - 2007-09-26展示会、10月22日ホール導入予定、全ボーナス後CZ、100G完走型RTを確認。
   - reliability: INDUSTRY
2. ITmedia Mobile — 「マジックモンスター2」ホールデビュー記念キャンペーン
   - https://www.itmedia.co.jp/mobile/articles/0710/23/news078.html
   - 2007-10-22ホールデビューを同時代記事で確認。
   - reliability: CONTEMPORARY_MEDIA
3. P-WORLD — マジックモンスター2
   - https://www.p-world.co.jp/machine/database/4943
   - オリンピア、5号機RT、2007年10月導入、SBB約322枚/BIG約223枚/REG約108枚。型式名欄は空欄。
   - reliability: DATABASE
4. パチマガスロマガ — マジックモンスター2 基本/解析
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/81/a.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/81/h.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/81/c.php
   - BIG/REG/合算、PAYOUT、獲得枚数、1000円あたり実戦値41.66Gを確認。
   - reliability: ANALYSIS_HIGH
5. PACNK — マジックモンスター2
   - https://pacnk.com/slot/2007/mag/
   - https://pacnk.com/slot/tools/sh_mag.html
   - 精密BIG/REG、機械割系列、天井非搭載、設定変更後CZスタートを確認。
   - reliability: ANALYSIS_HIGH
6. A-SLOT — オリンピア マジックモンスター2
   - https://www.a-slot.com/SHOP/heiwa66.html
   - 機械割系列、平均獲得枚数、100G完走RTで純増約70枚を確認。
   - reliability: RETROSPECTIVE_MACHINE_DB
7. 5号機クロニクル — 平和＆オリンピア5号機一覧
   - https://5goki.com/heiwa-olympia
   - 2007年10月、別系列の設定別機械割を確認。
   - reliability: RETROSPECTIVE_DB
8. スロ板blog — 当時スレッドテンプレ保存
   - https://slbl.blog.shinobi.jp/テンプレ：ま行/マジックモンスター2
   - CZ周期、設定変更後内部CZ等の当時コミュニティ記録。resetBehaviorの補助根拠のみ。
   - reliability: COMMUNITY_ARCHIVE_SUPPORTING_ONLY

## missingFields

- 正式型式名（P-WORLD現存欄も空欄）
- 電源OFF→ONのみ時の周期/CZ/RT状態処理
- 据え置き時の周期残G/CZ/RT状態の厳密な引継ぎ
- RT中など特殊状態での設定変更処理
- 本機固有ガックン/初期出目等の高信頼な変更判別資料
- 設定変更専用のRT突入率・朝一当選率など公開数値

## conflicts

- 設定別機械割はパチマガ/PACNK/A-SLOT系列（概ね96.5〜114.3%）と5号機クロニクル系列（97.3〜112.3%）で大きく競合。平均せず全系列保持。
- 設定4は同じ前者系列内でも103.6%（パチマガ）/103.8%（PACNK・A-SLOT）の小差あり。

## notes

- 192件目「パチスロ湘南爆走族」と同じ2007-10-22群の未登録機として追加。
- 性能コアは設定別ボーナス確率、代表ベース、RT純増、基本獲得まで回収できたため、機械割CONFLICTを明示したうえで `COMPLETE_CORE_WITH_CONFLICT`。
- resetBehaviorは設定変更直後CZスタートという朝一に重要な挙動を回収できたが、据え置き/電断/特殊状態処理が未確定のため `PARTIAL`。
