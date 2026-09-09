# No.1157 戦国コレクション3

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 戦国コレクション3
- aliases: `戦コレ3`
- manufacturer: KPE
- releaseDateCanonical: 2017-11-20
- generation: 5.9号機（5号機）
- systemType: A+ART
- formalModelName: `戦国コレクション3／KR`
- certificationNumber: `7S1038`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE: 2017-11-20
- 一撃: 2017-11-20
- ちょんぼりすた: 2017-11-20
- パチビー2017年11月導入カレンダー: 2017-11-20
- 複数系統で一致し、releaseDateの実質的競合なし。

## performanceCore

### payoutRateBySetting
- setting1: 97.7%
- setting2: 98.4%
- setting3: 100.1%
- setting4: 102.4%
- setting5: 105.3%
- setting6: 110.0%

### bonusBySetting
ギフト（ボーナス）合算:
- setting1: 1/256.0
- setting2: 1/244.5
- setting3: 1/217.0
- setting4: 1/196.2
- setting5: 1/173.4
- setting6: 1/157.9

### artInitialHitBySetting
- setting1: 1/397.6
- setting2: 1/395.9
- setting3: 1/390.0
- setting4: 1/385.2
- setting5: 1/378.5
- setting6: 1/373.1

### bonusPlusArtCombinedBySetting
- setting1: 1/155.7
- setting2: 1/151.2
- setting3: 1/139.4
- setting4: 1/130.0
- setting5: 1/118.9
- setting6: 1/111.0

### baseGamesPer50
- 約34.4G/50枚をcanonical。
- 後年整理資料の約34G/50枚とも丸め差の範囲で整合。

### netIncrease
- ART単体: 約1.7枚/G
- ボーナス込みART: 約2.0枚/G
- 比較時に定義を混同しない。

### basicPayout
- ギフト1（赤7）: 48枚
- ギフト2（青7）: 72枚
- ギフト3（異色）: 72枚
- ART「戦コレ劇場」: 1話45G（前篇20G + 後篇20G + 完結篇5G）。準備等を含めて「50G以上」とする資料もあるため、固定本編45Gと周辺区間込み表現を分離して保持。

### ceiling
- `NONE`。天井非搭載。

## modeSpecificMinimumData
- CZ「激突！暗黒団」: 10G+α、ART期待度約40%、トータル突入率1/242.2（全設定共通とする解析）。
- 有利区間中はCZ/修羅モード等の抽選が優遇。
- 5.9号機の有利区間上限は1500G。

## resetBehavior

### settingChangeBehavior
- 設定変更時は内部状態をリセットし、通常スタート。
- 液晶は通常ステージ（春）へ。
- 有利区間はリセットされ、非有利区間から開始。
- RT状態はボーナス後状態から開始。

### carryOverBehavior
- 据え置き時は有利区間を引き継ぐ。朝一に有利区間ランプが点灯していれば据え置き推測の強い材料となる。
- RT状態等も設定変更を伴わない場合は引継ぎ系資料があるが、「据え置き」と「純電源OFF→ON」の表現が同一表で整理される資料が中心のため、独立条件として不必要に拡張しない。

### powerCycleBehavior
- 電源OFF→ONのみでは内部状態を引き継ぐ。
- 非有利区間かつ通常ステージなら春ステージ、 有利区間中などは液晶状態も引き継ぐ。
- 有利区間はランプ点灯を含めて引き継ぐ。
- RT状態も引き継ぐ。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`
- 本機はゲーム数天井非搭載。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`
- 設定変更専用の短縮天井もなし。

### modeAfterReset
- ゲーム数解除用の朝一専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時は非有利区間へ戻るため、有利区間に紐づく抽選状態はリセット。

### stateAfterReset
- 設定変更: 内部状態リセット、通常スタート。
- 純電源OFF→ON: 内部状態引継ぎ。

### advantageousSectionReset
- 設定変更: `RESET_TO_NON_ADVANTAGEOUS_SECTION`。
- 据え置き / 純電源OFF→ON: `CARRYOVER`（有利区間ランプ点灯も含む）。
- 有利区間の通常時終了条件は24G消化または1回以上の押し順ナビ等とする解析があり、ARTを含む1回の有利区間は1500G上限。

### resetBenefits
- 天井短縮などの直接的ゲーム数恩恵はなし。
- 設定変更で非有利区間・通常状態へ戻るため、前日有利区間/CZ高確等の状態を持ち越す恩恵は失われる可能性がある。これは「設定変更時の状態RESET」として扱い、個別期待値は推定しない。

### resetPenalties
- 公開された固定数値の「リセット不利」は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし前日有利区間が有利な状態なら設定変更で消えるため、状態依存の機会損失はあり得る。期待値を推定してDB値にはしない。

### resetDetection
- クレジットセグ右下のドットが有利区間ランプ。
- 設定変更後は非有利区間でランプ非点灯。
- 据え置きでは有利区間とランプ点灯を引き継ぐため、朝一ランプ点灯は据え置き濃厚（対策が無い前提）。
- 春ステージ開始だけでは、非有利区間通常時の純電源OFF→ONでも春へ戻るため確定判別にはならない。
- 本機固有のリールガックン確定契約は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時の有利区間: 非有利区間 100%として扱える公開挙動（「通常/非有利区間」開始）。
- 設定変更時のRT状態: ボーナス後状態。
- 設定変更時ステージ: 春ステージ。
- 設定変更専用のモード振り分け・朝一特定G以内当選率・リセット恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- ART基本G数は「1話45G」と「継続ゲーム数50G以上」の資料表現差あり。1話の固定本編は前篇20G+後篇20G+完結5G=45Gとする解析が具体的なためcanonical。50G以上表記は準備/オープニング等を含む広義性能表現として別定義で保持し、平均化しない。

## sources
取得日: 2026-09-10

1. HAZUSE — 戦国コレクション3
   - https://hazuse.com/machine/pachislot/7S0701/
   - 導入2017-11-20、KPE、型式`戦国コレクション3／KR`、検定番号`7S1038`。
   - confidence: `ANALYSIS_HIGH`

2. 一撃 — 戦国コレクション3
   - https://1geki.jp/slot/s_sengokucollection3/
   - 導入2017-11-20、設定別ギフト+ART合算、機械割、純増約2.0枚/G（ボーナス込み）。
   - https://1geki.jp/slot/s_sengokucollection3/1/
   - 設定別ギフト合算、ART初当たり。
   - https://1geki.jp/slot/s_sengokucollection3/3/
   - 天井非搭載、設定変更時/電源OFF→ON時のステージ・内部状態比較。
   - confidence: `ANALYSIS_HIGH`

3. 期待値見える化 — 戦コレ3 有利区間・朝一リセット
   - https://slotjin.com/slot/sencolle3/
   - 約34.4G/50枚、ART単体約1.7枚/G・ボーナス込み約2.0枚/G、1話45G、朝一設定変更/電源OFF→ONの有利区間・RT状態・ステージ、朝一ランプ判別、有利区間移行/終了条件。
   - confidence: `ANALYSIS_HIGH`

4. P-WORLD — 戦国コレクション3
   - https://www.p-world.co.jp/machine/database/8506
   - A+ART、有利区間、ボーナス獲得枚数、ART構造の照合。「50G以上」表記は45G本編との定義差として保持。
   - confidence: `INDUSTRY`

5. ちょんぼりすた — 戦国コレクション3
   - https://chonborista.com/slot/kpe-slot/45695/
   - 導入2017-11-20、5.9号機、天井非搭載、有利区間の解析照合。
   - confidence: `ANALYSIS_HIGH`

6. パチビー — 2017年11月導入カレンダー
   - https://www.pachibee.jp/machines/schedule/2017-11
   - 2017-11-20導入群として戦国コレクション3・グレートキングハナハナを列挙。11/6群ではパチスロはニューパルサーSPⅡのみ。
   - confidence: `INDUSTRY`

7. パチ7 — はじめての5.9号機 有利区間
   - https://pachiseven.jp/articles/detail/4574
   - 戦コレ3を例に5.9号機有利区間仕様を当時解説。
   - confidence: `INDUSTRY`

## missingFields
- resetDetectionGakkun: `UNVERIFIED_AFTER_RESEARCH`
- dedicatedResetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- publicResetInitialHitWithinSpecificGames: `NONE_CONFIRMED_AFTER_RESEARCH`

## researchNotes
- `戦国コレクション3 / 戦コレ3 / 戦国コレクション3／KR`、KPE、設定変更、リセット、朝一、据え置き、電源OFF ON、天井、モード、内部状態、有利区間、ランプ、ガックン、50枚、純増、ART初当たりへ検索語を変更し、HAZUSE・一撃・P-WORLD・当時解析・導入カレンダーを横断。
- 5.9号機の初期ART機として有利区間の設定変更/据え置き差が客の朝一行動へ直接影響するため、ランプ引継ぎをv0.7の主要判別項目として保存。
