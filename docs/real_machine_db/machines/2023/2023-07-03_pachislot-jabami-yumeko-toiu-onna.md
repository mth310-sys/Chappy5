# パチスロ 蛇喰夢子という女

recordNo: 1574
machineName: パチスロ 蛇喰夢子という女
manufacturer: ネット
formalModel: S蛇喰夢子という女NE
inspectionCode: 2S1871
releaseDate: 2023-07-03
generation: 6.5号機 / メダル機
systemType: AT / 差枚数管理 / 技術介入
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
### 市場想定
- 設定1: 97.3%
- 設定2: 98.2%
- 設定3: 101.4%
- 設定4: 102.4%
- 設定5: 105.6%
- 設定6: 105.2%
### 完全攻略
- 設定1: 102.0%
- 設定2: 105.2%
- 設定3: 105.9%
- 設定4: 107.1%
- 設定5: 108.5%
- 設定6: 109.1%
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### CZ合算
- 設定1: 1/259
- 設定2: 1/231
- 設定3: 1/229
- 設定4: 1/217
- 設定5: 1/217
- 設定6: 1/216
### AT初当たり
- 設定1: 1/323
- 設定2: 1/294
- 設定3: 1/290
- 設定4: 1/284
- 設定5: 1/274
- 設定6: 1/271
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 設定1～6: 約33.2～35.2G/50枚。
- 設定1の代表値: 約33.2G/50枚。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「百花王学園 生徒会長選挙」: 約2.7枚/G。
信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- ATは差枚数管理型。
- AT初期差枚数: 100枚+α。
- AT突入時は原則「ディーラータイム」（5G+α）から開始し、チップ・アイテム・差枚上乗せを獲得して本ATへ移行する。
信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData
- ゲーム数天井: 通常時961G+α（前兆最大26G）でAT当選。
- MAP天井: 127マス到達後、宝箱から「さぁ」アイコンを獲得し前兆経由でAT当選。
- CZは「滾るZONE」（成功期待度約40%）と「超新星ZONE」（約80%）の2系統。
- 奇数設定は青筐体・2コマ目押し、偶数設定は赤筐体・ビタ押し。完全攻略出率と市場想定出率は定義を分けて保持する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 複数の朝一攻略資料で、設定変更時は天井をRESETし、内部状態/内部モードもRESET扱いとされる。
- 一方、なな徹の2023-11-24時点の朝一ページは設定変更時の詳細を「現在調査中」としている。否定情報ではないが、メーカー一次解析で確定した契約ではないため `ANALYSIS_SINGLE_TO_MULTI_SECONDARY / CAUTION` として扱う。
- 設定変更時のMAP進行、保有アイテム、CZ高確等の全内部値を個別に固定できる一次資料は確認できず、細部は一般論で補完しない。

### carryOverBehavior
- 据え置き専用の独立記述は十分に確認できなかった。
- 電源OFF→ON比較資料では天井・内部状態/内部モードを引き継ぐとされるため、設定変更を行わない営業据え置きも同方向と考えられる資料構成だが、本DBでは据え置き固有の直接資料不足を明示して `CARRY_OVER_SUPPORTED_INDIRECTLY / PARTIAL` とする。

### powerCycleBehavior
- 複数攻略資料で、純電源OFF→ONは天井を引き継ぎ、内部状態/内部モードも引き継ぐとされる。
- 朝一ステージは設定変更時・電源OFF→ON時とも通常ステージとする資料があり、見た目だけでの完全判別は困難。
信頼度: ANALYSIS_HIGH_SECONDARY_MATCH

### gameCounterReset
- 設定変更: 天井ゲーム数はRESETとする攻略資料が複数存在。
- 電源OFF→ON: 天井ゲーム数はCARRY_OVERとする攻略資料が複数存在。
- 据え置き: 独立の直接記述は不足するが、非設定変更側として引継ぎ方向の資料あり。
- 通常天井は961G+α、MAP天井は127マス+α。

### ceilingAfterReset
- 通常時天井: 961G+α。
- 設定変更後は「650Gに短縮」とする当時攻略資料を確認。
- ただし650G短縮は高信頼解析サイト側で最終確定値として十分に照合できず、ちょんぼりすたも導入初週実戦から「650G? / MAP最大66マス?」と推測表記。なな徹は設定変更挙動を調査中のままのため、**650Gは `ANALYSIS_SINGLE / PROVISIONAL_PUBLIC_VALUE` として保存しcanonical確定値には格上げしない**。

### modeAfterReset
- 設定変更: 内部モードRESETとする攻略資料あり。
- 電源OFF→ON: 内部モードCARRY_OVERとする攻略資料あり。
- 朝一専用モードの名称・振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 内部状態RESETとする攻略資料あり。
- 電源OFF→ON: 内部状態CARRY_OVERとする攻略資料あり。
- MAP上のアイテム、CZ高確、4コマ目押し券等を設定変更時にどう初期化するかの完全な項目別契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更時: 有利区間RESET、電源OFF→ON: 引継ぎとする攻略資料を確認。
- 有利区間ランプでは設定変更/据え置きを判別できないことをなな徹で確認。
- 有利区間約2500G付近の挙動を「天井」とする情報は当時攻略側でも「噂/推測」を含むため、確定仕様としては採用しない。
信頼度: ANALYSIS_SINGLE_TO_MULTI_SECONDARY / CAUTION

### resetBenefits
- 設定変更後の天井650G短縮情報あり。ただし `PROVISIONAL_PUBLIC_VALUE`。
- 低信頼の実戦/個人解析には「有利区間リセット時は会長バトル高確へ」とする記述もあるが、メーカー/高信頼解析で十分に照合できないためcanonical恩恵には採用せず `UNVERIFIED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更専用の明確な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 設定変更時・電源OFF→ON時とも通常ステージ開始とする資料があり、ステージだけの判別は困難。
- 設定変更後650G短縮が正しい場合、朝一650G消化後もAT非当選なら据え置き濃厚とする攻略資料あり。ただし650G自体がPROVISIONALのため判別ロジックも同じ信頼度に留める。
- 設定変更時も電源OFF→ON時も朝一10マス目まで宝箱に変化するため、序盤MAP表示だけでは判別困難とする資料あり。
- 本機固有のリールガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更後天井: **650G** とする当時攻略資料あり (`ANALYSIS_SINGLE / PROVISIONAL_PUBLIC_VALUE`)。
- 通常ゲーム数天井: **961G+α**。
- 通常MAP天井: **127マス+α**。
- 朝一専用モード振り分け、状態振り分け、朝一CZ/AT固定当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 650G短縮: `PROVISIONAL_PUBLIC_VALUE`。高信頼複数ソース確定に至らず。
- その他の設定変更専用数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ 蛇喰夢子という女 / 蛇喰夢子 / 賭ケグルイ / S蛇喰夢子という女NE / ネット` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 650G / 961G / 127マス / MAP / モード / 状態 / ガックン / 有利区間` を組み替えて検索。
- メーカー発表・業界記事・P-WORLD/遊技日本・なな徹・一撃・パチマガスロマガ・ちょんぼりすた・K-Navi・スロパチクエスト・パチスロメソッド・旧実機DB/回顧系を横断。
- 650G短縮は複数ページで引用されるが、高信頼解析の直接確定とメーカー一次値を固定できなかったためPROVISIONALを維持。

## sources
取得日: 2026-09-13
- ネット公式発表転載 / DreamNews（機種発表・2023年7月導入・公式サイト導線）: https://www.dreamnews.jp/press/0000279666/
- 遊技日本（型式名S蛇喰夢子という女NE・ゲーム性）: https://yugi-nippon.com/pachinko-new-machine/post-58079/
- Amusement Japan（発表・完全攻略値の代表値・純増）: https://amusement-japan.co.jp/article/detail/10003478/
- なな徹 機種総合（導入日・純増・ベース・天井）: https://nana-press.com/kaiseki/machine/579/
- なな徹 CZ（設定別CZ合算）: https://nana-press.com/kaiseki/machine/579/15669/
- なな徹 ディーラータイム/AT（初期差枚100枚+α・純増）: https://nana-press.com/kaiseki/machine/579/15672/
- なな徹 朝一/有利区間（設定変更詳細調査中・有利区間ランプ判別不可）: https://nana-press.com/kaiseki/machine/579/15639/
- 一撃 天井（961G+α / 127マス）: https://1geki.jp/slot/s_kakegurui/3/
- 一撃 ベース（33.2～35.2G/50枚）: https://1geki.jp/slot/s_kakegurui/4/
- すろぱちくえすと（設定別CZ/AT/機械割・朝一の天井/モード/有利区間・650G短縮）: https://www.slopachi-quest.com/article/jyabamiyumeko-settei/ ; https://www.slopachi-quest.com/article/jyabamiyumeko-tenjou/
- パチスロメソッド（設定変更/電源OFF→ON比較・朝一ステージ/10マス表示）: https://slotmethod.jp/archives/17040/
- ちょんぼりすた（導入初週の650G付近短縮推測・有利区間情報）: https://chonborista.com/slot/net-slot/188181/
- Pachinavi（型式・検定番号2S1871・設定別スペック再照合）: https://pachinavi.net/machines/kakegurui-yumeko/

## missingFields
- 設定変更後650G短縮のメーカー一次/高信頼複数ソース確定: PROVISIONAL_PUBLIC_VALUE
- 設定変更時の朝一専用モード/状態振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- MAP/保有アイテム/CZ高確等の全項目別リセット契約: UNVERIFIED_AFTER_RESEARCH
- 据え置き専用の独立した直接比較記述: PARTIAL / INDIRECT_SUPPORT
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の朝一CZ/AT固定当選率: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- なな徹は2023-11-24時点でも設定変更時の挙動を「現在調査中」とする一方、他攻略資料は天井/状態/モード/有利区間のRESETと650G短縮を掲載。直接の否定競合ではないが確度差が大きいため、650Gはcanonical確定値とせずPROVISIONALで保持。
- 有利区間約2500Gを「有利区間天井」とする記述は攻略側でも噂/推測表記を含む。確定仕様には採用しない。
- 主要性能コアは複数資料で一致し重大CONFLICTなし。

coreStatus: COMPLETE_CORE
status: COMPLETE_CORE_RESET_V07_PARTIAL_RESEARCH_EXHAUSTED
