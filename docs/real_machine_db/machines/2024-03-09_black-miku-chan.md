# パチスロ ブラックミクちゃん

recordNo: 1634
machineName: パチスロ ブラックミクちゃん
aliases: ブラックミクちゃん / Sブラックミクちゃん
manufacturer: DAXEL（製造元） / タツミコーポレーションPB
formalModel: SブラックミクちゃんDA
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2024-03-09（2店舗テスト導入開始） / 2024-04（タツミコーポレーション全店展開）
generation: 6.5号機 / メダル機
systemType: ノーマルAタイプ / ボーナス主体
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- タツミコーポレーション発表を報じたAmusement Japan、遊技日本/P-WORLD、グリーンべると/P-WORLDで、2024-03-09からミクちゃんガイア西明石店13台・ミクちゃんアリーナ泉ヶ丘店16台の2店舗テスト導入開始が一致。
- 同じ業界記事でテスト導入好評を受け2024年4月から全店舗導入と確認。K-Naviの「2024年4月」は全店展開側の日付と整合するため、3/9先行導入をcanonical releaseDate、4月を段階導入属性として保持する。
- HAZUSE 2024年3月導入一覧でも3月9日導入機種として独立掲載。
confidence: INDUSTRY / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本/P-WORLDが製造元DAXEL、型式名 `SブラックミクちゃんDA` を明記。
- ぱちんこキュレーションも型式 `SブラックミクちゃんDA`、2024-02-19のDAXEL名義検定通過を掲載。
- 公開検索で検定番号そのものは固定できなかったため推測せず `UNVERIFIED_AFTER_RESEARCH`。
confidence: INDUSTRY_FOR_FORMAL_MODEL / UNVERIFIED_AFTER_RESEARCH_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- setting1: 98.2%
- setting2: 99.2%
- setting3: 101.2%
- setting4: 103.2%
- setting5: 107.2%
- setting6: 111.3%
initialHitBySetting:
- setting1: ボーナス合算 1/154.5
- setting2: ボーナス合算 1/150.6
- setting3: ボーナス合算 1/142.1
- setting4: ボーナス合算 1/134.0
- setting5: ボーナス合算 1/124.8
- setting6: ボーナス合算 1/115.3
bonusProbabilityBySetting:
- setting1: BIG 1/271.9 / REG 1/358.1
- setting2: BIG 1/267.4 / REG 1/344.9
- setting3: BIG 1/258.0 / REG 1/316.6
- setting4: BIG 1/249.1 / REG 1/289.9
- setting5: BIG 1/240.0 / REG 1/260.0
- setting6: BIG 1/230.7 / REG 1/230.7
baseGamesPer50: 設定1～6で38.5G～41.5G/50枚（P-WORLD掲載範囲。設定別個別対応は公開表で固定せず）
netIncrease: N/A（ノーマルAタイプ）
basicPayout:
- BIG: 259枚
- REG: 103枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 主にBIG/REGのボーナスのみで出玉を増やすノーマルAタイプ。
- 天井は非搭載。
- AT/CZ、ゲーム数天井、朝一専用モードなどを主要な初当たり構造として使用しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_GACKUN_POWER_DISPLAY_AND_INSPECTION_CODE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 本機はボーナス主体のノーマルAタイプで、機種固有資料上、設定変更時に短縮されるゲーム数天井・朝一専用AT/CZモード・規定周期等は確認されない。
- 設定変更そのものに伴うリール/表示/ボーナス内部状態の機種固有詳細は、機種名・型式名・DAXEL・タツミコーポレーションと「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」を組み合わせて再探索したが固定資料を確認できず、推測転記しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_STRUCTURE / UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_RESET_DISPLAY

### carryOverBehavior
- ゲーム数天井・モード・周期・AT/CZスルー回数がないため、朝一狙いに関わるそれらの据え置き引継ぎは N/A。
- 据え置き時の機種固有リール挙動/表示契約は `UNVERIFIED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_CEILING_MODE_CYCLE / UNVERIFIED_AFTER_RESEARCH_FOR_DISPLAY

### powerCycleBehavior
- 電源OFF→ONのみで引き継ぐゲーム数天井・モード・周期は N/A。
- 純電断時のランプ/告知表示/リール挙動を直接明記した機種固有資料は、検索語と資料系統を変えても固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_CEILING_MODE_CYCLE / UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_DISPLAY

### gameCounterReset
- 天井非搭載のため、内部天井ゲーム数のRESET/CARRY_OVER契約は N/A。
- 外部データカウンターの営業運用は実機内部性能ではないため本DB対象外。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 天井非搭載。
- 設定変更専用の短縮天井なし / N/A。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一狙いに関わる通常モード/天国モード等の搭載を確認せず、本DBのresetBehavior粒度では N/A。
- 設定変更専用のモード振り分け数値なし / N/A。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### stateAfterReset
- AT/CZ用の通常時内部状態や朝一高確移行等、ホール経営/朝一客AIへ影響する設定変更専用状態を公開資料で確認せず N/A at mission granularity。
- ボーナス成立中など実機完全再現向けの細かな内部状態は本ミッション対象外。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### advantageousSectionReset
- 本機はボーナス主体のノーマルAタイプで、公開資料上、有利区間のリセット/引継ぎを朝一性能として利用するゲーム性は確認されない。
- 本DBのホール経営/朝一挙動粒度では `NOT_APPLICABLE` とし、規則上の内部実装を推測しない。
confidence: NOT_APPLICABLE_AT_MISSION_GRANULARITY

### resetBenefits
- 天井短縮、朝一専用モード、CZ優遇、AT初当たり優遇等の固定リセット恩恵は構造上確認されない。
- 公開された朝一専用数値なし / N/A。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### resetPenalties
- 設定変更専用の主要な不利要素、朝一ペナルティの公開情報は確認されない。
confidence: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### resetDetection
- 本機固有のガックン、設定変更後ランプ/リール挙動、据え置き判別について `パチスロ ブラックミクちゃん / ブラックミクちゃん / SブラックミクちゃんDA / DAXEL / タツミコーポレーション` × `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール / 変更判別` で検索語を変え、業界記事・P-WORLD・一撃・K-Navi・関連解析を横断したが高信頼の機種固有契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため、朝一の深いハマリや宵越し天井による設定変更判別は N/A。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_GACKUN_AND_DISPLAY / NOT_APPLICABLE_FOR_CEILING_DETECTION

### numericResetData
- 設定変更時短縮天井: N/A（天井非搭載）
- 設定変更時モード振り分け: N/A
- 朝一特定G以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / 機種構造上の専用値を確認せず
- 設定変更専用CZ/AT数値: N/A（CZ/AT非搭載）

### publicMorningNumbers
- 公開固定値として比較可能な朝一専用リセット数値は確認されない。
- 通常の設定別BIG/REG/合算値は性能コアに保持し、朝一専用値とは混同しない。

## missingFields
- 検定番号: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時のランプ/表示/リール挙動: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 導入時期: 業界一次系記事は2024-03-09の2店舗テスト導入開始、K-Navi等は2024年4月ホール導入開始と掲載。平均化せず、3/9を先行/実稼働開始のcanonical releaseDate、4月を全店展開として段階導入属性に分離。

## sources
取得日: 2026-09-14

### 型式・導入・性能コア
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004209/
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/27215/nippon
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/27211/greenbelt
- P-BOMB: https://p-bomb.co.jp/industry/hall/9056/
- ぱちんこキュレーション: https://pachinko-curation.com/46586/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10027
- 一撃 設定判別/ボーナス確率: https://1geki.jp/slot/s_black_miku_chan/0/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_black_miku_chan/3/
- K-Navi: https://p-kn.com/slot/4130/
- HAZUSE 2024年3月導入一覧: https://hazuse.com/new-machine/202403-2/
