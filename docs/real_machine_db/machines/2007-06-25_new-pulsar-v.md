# ニューパルサーV

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: ニューパルサーV
formalModelName: ニューパルサーV-G
manufacturer: 山佐
releaseDate: 2007-06-25
releaseDateBasis: ALL7.jpのホール導入予定日。山佐ネクスト公式は稼働時期を2007年6月と記載。
generation: 5号機初期
systemType: ノーマル/Aタイプ・4リール4ストップ・リーチ目主体

## 性能コア

payoutRateBySetting:
- 設定1: 97.2%
- 設定2: 99.4%
- 設定3: 102.4%
- 設定4: 105.1%
- confidence: ANALYSIS_HIGH
- note: P-WORLD掲載値。4段階設定。

initialHitBySetting:
- 設定1: ボーナス合算 1/202.3
- 設定2: ボーナス合算 1/191.6
- 設定3: ボーナス合算 1/175.2
- 設定4: ボーナス合算 1/165.5
- confidence: ANALYSIS_HIGH

bonusProbabilityBySetting:
- 設定1: 赤7BIG 1/606.8 / カエルBIG 1/606.8 / REG 1/606.1
- 設定2: 赤7BIG 1/574.9 / カエルBIG 1/574.9 / REG 1/574.9
- 設定3: 赤7BIG 1/550.7 / カエルBIG 1/550.7 / REG 1/481.9
- 設定4: 赤7BIG 1/550.7 / カエルBIG 1/550.7 / REG 1/414.8
- confidence: ANALYSIS_HIGH

baseGamesPer50:
- value: UNVERIFIED
- note: 「ニューパルサーV / ニューパルV / ニューパルサーV-G / 山佐」に「50枚 / 1000円 / 千円 / ベース / コイン持ち / パチマガ / スロマガ」を組み替えて、公式・P-WORLD・古い解析・回顧資料を再探索したが、本機固有の比較可能な50枚あたりゲーム数を今回確定できず。

netIncrease:
- value: NOT_APPLICABLE
- note: RT/ART/AT等の付加機能を搭載しないノーマルタイプ。

basicPayout:
- BIG: 約312枚
- REG: 約156枚
- officialPayoutCondition: BIGは360枚超払い出しで終了 / REGは180枚超払い出しで終了
- confidence: ANALYSIS_HIGH

modeSpecificMinimumData:
- RT/CZ/ART/AT: NONE_CONFIRMED
- 小役とボーナスの同時当選: なし（単独当選のみ）
- 第4リールにより旧ニューパルサー系のチャンスパターン/リーチ目を再現。

## v0.7 resetBehavior

resetBehavior:
  settingChangeBehavior:
  - UNVERIFIED
  - 本機固有の設定変更時に遊技性能へ影響する公開挙動は確認できず。RT/CZ/天井/ゲーム数管理モードを搭載しないため、それらの変更時処理は非該当。

  carryOverBehavior:
  - PARTIAL
  - ボーナス当選天井、ゲーム数管理モード、RT/CZ状態は存在を確認できず、これらの据え置き引継ぎはNOT_APPLICABLE。
  - ホール側表示ゲーム数や機器固有カウンタの据え置き挙動は本DB対象性能として確定資料なし。

  powerCycleBehavior:
  - PARTIAL
  - 電源OFF→ONのみで影響を受ける天井/モード/RT状態はNONE_CONFIRMED。
  - 本機固有のリール初動・表示・変更判別に関わる電断挙動はUNVERIFIED。

  gameCounterReset:
  - NOT_APPLICABLE
  - ボーナス当選に関わるゲーム数天井・周期管理を確認できず。

  ceilingAfterReset:
  - NOT_APPLICABLE
  - 通常時ゲーム数天井を確認できず、短縮天井もNONE_CONFIRMED。

  modeAfterReset:
  - NOT_APPLICABLE
  - 通常時のゲーム数管理モード/朝一専用モードを確認できず。

  stateAfterReset:
  - NOT_APPLICABLE_FOR_GAMEPLAY_STATE
  - RT/CZ/ART/ATの内部状態を持たないノーマルタイプとして確認。設定変更時に別途公開された朝一内部状態はNONE_CONFIRMED。

  advantageousSectionReset:
  - NOT_APPLICABLE
  - 5号機初期で有利区間制度導入前。

  resetBenefits:
  - NONE_CONFIRMED
  - 設定変更専用の天井短縮、CZ優遇、モード優遇、朝一当選率等は確認できず。

  resetPenalties:
  - NONE_CONFIRMED
  - 設定変更時固有の不利要素は確認できず。

  resetDetection:
  - UNVERIFIED
  - `ニューパルサーV / ニューパルV / ニューパルサーV-G / 山佐` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール初動 / 変更判別` を組み替え、古い攻略系・回顧資料まで再探索したが、本機固有の高信頼なガックン等の変更判別情報を確定できず。

  numericResetData:
  - NONE_CONFIRMED
  - 朝一専用当選率、短縮天井、リセット恩恵発生率等の公開数値なし。

## 資料照合・判断

- 山佐ネクスト公式は本機を「5号機 / Aタイプ / 稼働時期2007年6月」として掲載し、第4リールによるチャンスパターン再現を説明。
- ALL7.jpは導入予定を2007-06-25と掲載。本DB時系列は具体的ホール導入予定日を採用。
- P-WORLDは型式名 `ニューパルサーV-G`、検定番号7S0314、4段階設定のボーナス確率/機械割、BIG約312枚/REG約156枚、付加機能なしのノーマルタイプを掲載。
- パチ7回顧も5号機ニューパルサーVが2007年登場の4リール機であることを確認。
- 50枚ベースおよび本機固有の設定変更/電断/ガックン情報は、検索語と資料系統を変えた再探索後も確定できずUNVERIFIED。

## sources

1. 山佐ネクスト公式「ニューパルサーV」
   - URL: https://yamasa-next.co.jp/model_npv/
   - retrieved: 2026-08-31
   - confidence: OFFICIAL
   - use: メーカー、5号機/Aタイプ、稼働時期2007年6月、第4リール仕様

2. ALL7.jp「2007年6月 新台導入予定一覧」
   - URL: https://www.all7.jp/plans/index/2007/06
   - retrieved: 2026-08-31
   - confidence: INDUSTRY
   - use: 導入予定2007-06-25

3. P-WORLD「ニューパルサーV」
   - URL: https://www.p-world.co.jp/machine/database/4799
   - retrieved: 2026-08-31
   - confidence: ANALYSIS_HIGH
   - use: 型式名、検定番号、4段階設定、設定別ボーナス確率、合算、機械割、獲得枚数、ノーマル仕様

4. パチ7「『ニューパルサー』の歴史」
   - URL: https://pachiseven.jp/articles/detail/12894
   - retrieved: 2026-08-31
   - confidence: ANALYSIS_SINGLE
   - use: 2007年5号機ニューパルサーV、4リール採用の回顧照合

5. 山佐「REMEMBER OF THE NEW PULSAR」
   - URL: https://www1.yamasa.co.jp/40th_remnp/interview/int02.html
   - retrieved: 2026-08-31
   - confidence: OFFICIAL
   - use: 5号機ニューパルサーVの第4リールと小役取りこぼし補正、5号機化による仕様差の補助確認

missingFields:
- baseGamesPer50: UNVERIFIED
- settingChangeBehaviorの本機固有物理/表示挙動: UNVERIFIED
- powerCycleBehaviorの本機固有物理/表示挙動: UNVERIFIED
- resetDetection（ガックン等）: UNVERIFIED

conflicts:
- NONE_CONFIRMED

取得日: 2026-08-31
