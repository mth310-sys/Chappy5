# モーニング娘。

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: モーニング娘。
formalModelName: モーニング娘。S
manufacturer: ビスティ
releaseDate: 2007-06-25
releaseDateBasis: ALL7.jpのホール導入予定日を時系列本線に採用。SANKYOオンライン博物館は導入年月を2007.07と記載するため、発売/導入時期表記差としてCONFLICT保持。
generation: 5号機初期
systemType: ボーナス+CZ+RT

## 性能コア

payoutRateBySetting:
- 設定1: 94.1%
- 設定2: 96.8%
- 設定3: 99.4%
- 設定4: 102.5%
- 設定5: 106.5%
- 設定6: 110.5%
- confidence: ANALYSIS_SINGLE
- note: 5号機クロニクル掲載値。別系統で設定別機械割の再照合を試みたが、今回同一テーブルを高信頼に再確認できず単一整理資料値として保持。

initialHitBySetting:
- 設定1: ボーナス合算 1/268.6
- 設定2: ボーナス合算 1/257.0
- 設定3: ボーナス合算 1/246.4
- 設定4: ボーナス合算 1/234.9
- 設定5: ボーナス合算 1/216.3
- 設定6: ボーナス合算 1/199.2
- confidence: ANALYSIS_SINGLE

bonusProbabilityBySetting:
- 設定1: BIG 1/385.5 / CB 1/885.6
- 設定2: BIG 1/362.1 / CB 1/885.6
- 設定3: BIG 1/341.3 / CB 1/885.6
- 設定4: BIG 1/319.7 / CB 1/885.6
- 設定5: BIG 1/296.5 / CB 1/799.2
- 設定6: BIG 1/277.7 / CB 1/704.7
- confidence: ANALYSIS_SINGLE
- note: BIGは赤7/青7合算として後年機種整理資料に掲載。

baseGamesPer50:
- value: UNVERIFIED
- note: `モーニング娘。 / モーニング娘 / モーニング娘。S / ビスティ` と `50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数` を組み替え、メーカー公式アーカイブ、P-WORLD、パチマガスロマガ旧ページ、古い機種DB、回顧資料まで再探索したが、本機固有の比較可能な50枚あたりゲーム数を今回確定できず。

netIncrease:
- RT「モーニングタイム」: 77G固定
- pureNetIncreasePerGame: UNVERIFIED
- note: 77G継続はメーカー公式アーカイブ、ORICON当時記事、パチマガスロマガ旧ページ系で確認。純増/Gは今回高信頼に確定できず。

basicPayout:
- BIG: 346枚を超える払い出しで終了
- CB: 106枚を超える払い出しで終了
- netPayout: UNVERIFIED
- confidence: ANALYSIS_HIGH
- note: P-WORLD掲載の終了条件。純増枚数を払い出し終了条件から推算せず、比較用実獲得枚数は未確認のまま保持。

modeSpecificMinimumData:
- BIGは赤7BIG/青7BIGの2種類、CB1種類。
- 全ボーナス後にCZ「モーニングチャンス」へ移行。
- モーニングチャンス中の特殊リプレイ成立で77G RT「モーニングタイム」へ突入。
- 赤7BIG後は他ボーナス後よりRT突入期待が高いことをメーカー公式アーカイブで確認。
- モーニングチャンス中はチェリー/スイカ入賞で終了するため、回避手順を用いるゲーム性が存在。
- RT突入率/各ボーナス後の具体的RT期待度: UNVERIFIED（完全再現用の細部は本DB必須外だが、朝一/resetに影響する値が確認できた場合のみ今後補足）。

## v0.7 resetBehavior

resetBehavior:
  settingChangeBehavior:
  - UNVERIFIED
  - 本機はボーナス後CZ→特殊リプレイで77G RTへ移行する構造を持つため、設定変更でCZ/RT内部状態または残りRTゲーム数がどう処理されるかを重点再探索したが、高信頼資料を確定できず。

  carryOverBehavior:
  - UNVERIFIED
  - 据え置き時にボーナス後CZ、成立済み特殊リプレイ関連状態、RT残りGが引き継がれるかについて本機固有の公開解析を今回確定できず。

  powerCycleBehavior:
  - UNVERIFIED
  - 電源OFF→ONのみの場合のCZ/RT状態・残りGおよびリール初動/表示挙動を本機固有資料で確定できず。

  gameCounterReset:
  - NOT_APPLICABLE_FOR_CEILING
  - 通常時ゲーム数天井・周期到達型初当たりは確認できず。RTの残りG処理はstateAfterReset側でUNVERIFIEDとして分離。

  ceilingAfterReset:
  - NOT_APPLICABLE
  - 通常時ゲーム数天井を確認できず、設定変更時の短縮天井もNONE_CONFIRMED。

  modeAfterReset:
  - NONE_CONFIRMED
  - 通常時ゲーム数管理モード、朝一専用モード、設定変更専用モード振り分けは確認できず。

  stateAfterReset:
  - UNVERIFIED
  - CZ「モーニングチャンス」および77G RT「モーニングタイム」を持つためRESET_SENSITIVE候補。設定変更/据え置き/電断での状態・RT残りG処理は十分な再探索後も未確定。

  advantageousSectionReset:
  - NOT_APPLICABLE
  - 5号機初期で有利区間制度導入前。

  resetBenefits:
  - NONE_CONFIRMED
  - 設定変更専用のRT突入優遇、朝一CZ、天井短縮、初当たり優遇等の公開恩恵は確認できず。

  resetPenalties:
  - NONE_CONFIRMED
  - 設定変更時固有の不利要素は確認できず。

  resetDetection:
  - UNVERIFIED
  - `モーニング娘。 / モーニング娘。S / ビスティ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール初動 / 変更判別 / RT 引継ぎ` を組み替え、旧攻略ページ・掲示板・回顧資料まで再探索したが、本機固有の高信頼な変更判別情報を確定できず。

  numericResetData:
  - NONE_CONFIRMED
  - 朝一特定G以内当選率、リセット後RT/CZ突入率、設定変更専用モード振り分け、短縮天井等の公開数値は確認できず。

## 資料照合・判断

- SANKYOオンライン博物館は型式名 `モーニング娘。S`、ビスティ、導入年月2007.07、BIG2種+CB1種、全ボーナス後CZ、特殊リプレイで77G RTを公式アーカイブとして掲載。
- ALL7.jpはビスティ「モーニング娘。」の導入予定を2007-06-25と掲載。本DBの時系列本線は具体的なホール導入予定日を採用するが、公式アーカイブの2007.07表記はCONFLICTとして保持。
- ORICONの2007-06-04当時記事でも、全ボーナス後モーニングチャンス→特殊リプレイ獲得で77G RT「モーニングタイム」の基本構造が一致。
- P-WORLDで型式名、BIG/CBの払い出し終了条件を確認。
- 5号機クロニクルで設定別機械割94.1〜110.5%を取得。
- 後年の機種整理資料でBIG/CB/合算確率を取得。設定別確率は今回別系統で同一テーブルを十分に再照合できなかったためANALYSIS_SINGLE。
- 50枚ベース、RT純増/G、本機固有の設定変更・据え置き・電断時CZ/RT処理、ガックン等の変更判別は検索語・資料系統を変えた再探索後も確定できずUNVERIFIED。

## sources

1. SANKYOオンライン博物館「モーニング娘。」
   - URL: https://www.sankyo-fever.jp/collection/866/
   - retrieved: 2026-08-31
   - confidence: OFFICIAL
   - use: メーカー、型式名、導入年月2007.07、BIG2種+CB、CZ/77G RT構造、赤7BIG後のRT期待度が高いこと

2. ALL7.jp「2007年6月 新台導入予定一覧」
   - URL: https://www.all7.jp/plans/index/2007/06
   - retrieved: 2026-08-31
   - confidence: INDUSTRY
   - use: 導入予定2007-06-25

3. ORICON NEWS「デビュー10周年のモーニング娘。がホールを席巻？」（2007-06-04）
   - URL: https://www.oricon.co.jp/news/45056/full/
   - retrieved: 2026-08-31
   - confidence: INDUSTRY
   - use: 当時発表時点の全ボーナス後CZ→特殊リプレイ→77G RT構造の照合

4. P-WORLD「モーニング娘。」
   - URL: https://www.p-world.co.jp/machine/database/4738
   - retrieved: 2026-08-31
   - confidence: ANALYSIS_HIGH
   - use: 型式名、BIG/CB払い出し終了条件

5. パチマガスロマガ公式旧ページ「モーニング娘。」
   - URL: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/10/a.php
   - retrieved: 2026-08-31
   - confidence: ANALYSIS_HIGH
   - use: 基本システムがプチRT/同時成立/RT/CZであることの照合

6. 5号機クロニクル「ビスティ（Bisty）5号機全機種一覧」
   - URL: https://5goki.com/bisty
   - retrieved: 2026-08-31
   - confidence: ANALYSIS_SINGLE
   - use: 2007/6表記、設定別機械割94.1〜110.5%

7. pachinko’s blog「ビスティ『パチスロ モーニング娘。』の筐体＆スペック＆情報」
   - URL: https://pachinko.hatenablog.jp/entry/2007/06/morning-musume
   - retrieved: 2026-08-31
   - confidence: ANALYSIS_SINGLE
   - use: BIG/CB/合算の設定別確率、2007.06リリース、ボーナス+RT分類

missingFields:
- baseGamesPer50: UNVERIFIED
- RT純増/G: UNVERIFIED
- BIG/CBの比較用実獲得純増枚数: UNVERIFIED
- 設定別BIG/CB/合算確率の別系統再照合: UNVERIFIED
- settingChangeBehaviorのCZ/RT内部状態処理: UNVERIFIED
- carryOverBehaviorのCZ/RT残り状態: UNVERIFIED
- powerCycleBehaviorのCZ/RT残り状態: UNVERIFIED
- resetDetection（ガックン等）: UNVERIFIED

conflicts:
- releaseDate: ALL7.jp 2007-06-25導入予定 / SANKYOオンライン博物館 2007.07導入年月。平均せず双方保持し、時系列本線は具体的ホール導入予定日2007-06-25。

取得日: 2026-08-31
