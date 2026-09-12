# 機動警察パトレイバーX

status: COMPLETE_CORE
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

machineName: 機動警察パトレイバーX
aliases:
- パトレイバーX
- 機動警察パトレイバーX「2007年」
formalModelName: UNVERIFIED
manufacturer: アビリット（現コナミアミューズメント系）
releaseDate: 2007-05（5号機クロニクル、後年機種年表で月一致。日単位の全国納品/ホール導入日は今回未確定）
generation: 5号機初期
systemType: A+RT / 完走型RT / BIG中ナビ変動 / 同時成立のみ

## 性能コア

payoutRateBySetting:
- パチマガスロマガ シミュレート値: 設定1 98.24% / 設定2 101.51% / 設定5 104.80% / 設定6 108.49%
- 5号機クロニクル: 設定1 97.0% / 設定2 101.0% / 設定5 104.9% / 設定6 109.4%

confidence: CONFLICT

note:
- 設定2/5は近いが、設定1・6は丸めでは説明しにくい差があるため平均せずCONFLICT。
- 5号機クロニクルでは「機動警察パトレイバー」と「機動警察パトレイバーX」を別掲載している。ボーナス確率は同系統だが、性能同一と断定せず本レコードはXのみを保存。

initialHitBySetting:
- BIG: 設定1 1/329.33 / 設定2 1/307.68 / 設定5 1/288.71 / 設定6 1/267.49
- CT: 設定1 1/512.00 / 設定2 1/474.90 / 設定5 1/442.81 / 設定6 1/425.56
- ボーナス合成: 設定1 1/200.42 / 設定2 1/186.71 / 設定5 1/174.76 / 設定6 1/164.25

confidence: ANALYSIS_HIGH

baseGamesPer50:
- 設定1: 33.72G
- 設定2: 33.95G
- 設定5: 34.21G
- 設定6: 34.47G

confidence: ANALYSIS_HIGH

netIncrease:
- 通常時スイカ成立で25G RTへ移行する構造をパチマガスロマガで確認。
- 1GあたりRT純増の比較可能な高信頼数値は今回未確定のためUNVERIFIED。

basicPayout:
- SUPER BIG: 規定345枚超払い出し終了 / 純増約305枚
- NORMAL BIG: 規定345枚超払い出し終了 / 純増約275枚
- CT（解析ページ表記はREG）: 規定119枚超払い出し終了 / 技術介入時MAX約125枚

confidence: ANALYSIS_HIGH

modeSpecificMinimumData:
- 設定は1 / 2 / 5 / 6の4段階。
- ボーナスは2種類のBIGとCTの3種類。
- ボーナス単独成立なし。小役との同時成立のみ。
- SUPER BIGは15枚役を100%ナビ、NORMAL BIGは15枚役ナビの成否が獲得枚数差へ影響。
- スイカは通常時3枚役かつRT25G契機。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED

settingChangeBehavior:
- 「機動警察パトレイバーX / パトレイバーX / アビリット」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / ガックン」を組み替え、パチマガスロマガ、P-WORLD、当時/後年DB、回顧資料まで再探索したが、設定変更時の25G RT残G・内部RT状態・成立済みボーナス/告知状態処理を明記した機種固有資料は確認できずUNVERIFIED_AFTER_RESEARCH。

carryOverBehavior:
- 通常時ゲーム数天井・朝一専用ゲーム数モードはNONE_CONFIRMED。
- 据え置き時の25G RT残G・内部RT状態、成立済みボーナス/告知状態の扱いはUNVERIFIED_AFTER_RESEARCH。

powerCycleBehavior:
- 電源OFF→ONのみでRT残G・内部状態・成立済みボーナス/告知状態が維持/消滅するかはUNVERIFIED_AFTER_RESEARCH。
- 電断のみで天井短縮・朝一専用モード・初当たり優遇が発生する根拠はNONE_CONFIRMED。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED / NOT_APPLICABLE相当。

ceilingAfterReset:
- NONE_CONFIRMED。

modeAfterReset:
- 通常時のゲーム数モード管理型としての公開情報はNONE_CONFIRMED。

stateAfterReset:
- 通常時スイカ契機25G RTは確認済み。
- 設定変更/据え置き/電断時のRT残G・内部状態処理のみUNVERIFIED_AFTER_RESEARCH。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更専用の短縮天井、専用モード、初当たり優遇はNONE_CONFIRMED。

resetPenalties:
- RT中の設定変更で不利が生じるかはRT処理自体がUNVERIFIEDのため確定しない。

resetDetection:
- 本機固有のガックン、初期出目、表示、RT挙動による設定変更/据え置き判別は、検索語・資料系統を変えた再探索後もUNVERIFIED_AFTER_RESEARCH。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED
- 短縮天井: NONE_CONFIRMED
- 朝一当選率/恩恵発生率: NONE_CONFIRMED

## sources

初回取得日: 2026-08-31
resetBehavior再取得日: 2026-09-12

1. パチマガスロマガ — 機動警察パトレイバーX ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/h.php
   - 設定1/2/5/6のBIG、CT、合成、シミュレートPAYOUT。
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — 機動警察パトレイバーX 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/kyotai.php
   - 完走型RT、2種類BIG+CB/CT、S-BIG約305枚、N-BIG約275枚、CB技術介入MAX約125枚。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 機動警察パトレイバーX 小役確率/1000円G
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/c.php
   - 設定別1000円33.72〜34.47G、スイカ3枚+RT25G。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 機動警察パトレイバーX ボーナス中の打ち方
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/e.php
   - S-BIG/N-BIGの15枚役ナビ差、CT技術介入MAX125枚。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 機動警察パトレイバーX ボーナス単独抽選
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/k.php
   - ボーナス単独成立なし。
   - reliability: ANALYSIS_HIGH
6. 5号機クロニクル — コナミアミューズメント（高砂電器・アビリット）5号機全機種一覧
   - https://5goki.com/konami
   - 2007/5、機動警察パトレイバーとXを別掲載。Xの設定別ボーナス確率と機械割97.0〜109.4%。
   - reliability: ANALYSIS_SINGLE
7. P-WORLD — 機動警察パトレイバー「2007年」
   - https://www.p-world.co.jp/machine/database/4591
   - 2007年版の独立機種ページが存在することを確認。Xとの性能同一性判定には使用しない。
   - reliability: INDUSTRY_DB
8. パチマガスロマガ — 機動警察パトレイバーX 総合解析
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/abilit_slot_16.php
   - 2026-09-12再確認。基本システム/RT項目は残存するが、設定変更・据え置き・純電断の機種固有契約は掲載確認できず。
   - reliability: ANALYSIS_HIGH
9. pachinko's blog — アビリット「パチスロ 機動警察パトレイバーX」の筺体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2007/06/patlabor-X
   - 2007年6月リリース表記、ボーナス+RT、設定別ボーナス値の回顧資料。reset契約の直接記述なし。
   - reliability: RETROSPECTIVE_SECONDARY

## missingFields

- 日単位の全国納品/ホール導入日
- 正式型式名
- RT 1Gあたり純増
- 設定変更/据え置き/電源OFF→ON時の25G RT残G・内部状態・成立済みボーナス/告知状態処理
- 本機固有の設定変更判別
- 無印版「機動警察パトレイバー」とXの差分仕様の確定資料

## conflicts

- 機械割: パチマガスロマガ 98.24 / 101.51 / 104.80 / 108.49% と、5号機クロニクル 97.0 / 101.0 / 104.9 / 109.4% が競合。平均しない。

## QA note

- 既存 `COMPLETE_CORE` は維持。reset QAのみ性能完了判定から分離して `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- 2026-09-12: RT25G、設定変更、据え置き、電源OFF→ON、朝一、ガックン、成立済みボーナス等へ検索語を切り替え、パチマガスロマガ/P-WORLD/当時・回顧資料を再探索。機種固有の変更・据え置き・純電断契約を直接固定できなかった。
- 一般的な5号機RT挙動からの推測補完は行わない。
- 無印版とXは同じ2007年5月に別機種として掲載される資料があり、ボーナス確率は同系統。筐体/型式/仕様差を確定するまで無印版へ本レコード値を自動転記しない。
