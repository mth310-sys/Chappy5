# SLOTメイドインアビス

recordNo: 1566
machineName: SLOTメイドインアビス
manufacturer: ミズホ（ユニバーサルエンターテインメントグループ）
formalModel: S／メイドインアビス／EN
inspectionCode: 2S1511
releaseDate: 2023-06-05
generation: 6.5号機 / メダルAT
systemType: AT / セット継続型 / CZ経由型
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.6%
- 設定2: 99.2%
- 設定3: 101.5%
- 設定4: 106.1%
- 設定5: 108.1%
- 設定6: 110.0%

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### CZ初当り
- 設定1: 1/138.8
- 設定2: 1/134.6
- 設定3: 1/129.2
- 設定4: 1/119.5
- 設定5: 1/114.4
- 設定6: 1/110.7

### AT初当り
- 設定1: 1/287.2
- 設定2: 1/276.5
- 設定3: 1/262.7
- 設定4: 1/233.1
- 設定5: 1/220.8
- 設定6: 1/212.6

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約35.9G/50枚（設定1基準）。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- ストーリーパート: 約1.8枚/G。
- 冒険パート: 約2.8枚/G。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- AT「アビスへの旅立ち」はセット継続型。
- 1セットは主にストーリーパート → 冒険パート → 継続ジャッジで構成。
- 冒険パートは基本30G+α、純増約2.8枚/G。
- ストーリーパートは純増約1.8枚/G。
- ATは最大12セットまで継続する可能性があり、その後はエンディング経由で上位区間へ移行する構造。
- 固定の単一「基本獲得枚数」は公開されておらず、物差し用途ではセットG数・純増を比較値として保持。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はCZ「ベニクチナワCZ」「レグCZ」等からAT初当りを目指す。
- 通常時500G+αでCZ天井、700G+αでAT天井。
- 700G+α到達時はAT権利獲得契機「旅の左手、最果ての右手」へ。
- アビスメーター5段階到達でもAT当選。
- 通常時100G付近は高確B、200〜400G付近はBAR揃い高確等の規定G数状態があるが、通常時全内部抽選表は本DB対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_LIMITED_PUBLIC_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は天井ゲーム数RESET。
- 内部状態RESET。
- 設定変更後は高確率状態からスタートすると複数解析が一致。
- 有利区間の設定変更時処理は、6.5号機一般論ではなく本機固有の直接記述を優先して再探索したが、高信頼資料で明示的に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用モード振り分けや固定G数短縮天井は確認できず、推測しない。

### carryOverBehavior
- 据え置き時は天井ゲーム数をCARRY_OVERする扱い。
- 内部状態もCARRY_OVERとする解析資料がある。
- 有利区間そのものの本機固有据え置き契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON時は天井ゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- 設定変更とは異なり、電源OFF→ONのみで天井・状態を初期化しないことを複数解析で確認。
- 有利区間そのものについて純電断単独の本機固有直接記述は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常AT天井は700G+α、CZ天井は500G+α。

### ceilingAfterReset
- 設定変更時は通常天井進行をRESET。
- 通常時500G+αでCZ、700G+αでATという基本天井は確認。
- 「設定変更時のみ○Gへ短縮」の固定短縮天井は、機種名/正式型式/メーカー名と「リセット・設定変更・朝一・天井短縮」等を組み替えて再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更後は高確率スタートとする解析が一致。
- 設定変更専用の公開モード振り分け数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置き/純電断時は内部状態を引き継ぐ資料を確認。

### stateAfterReset
- 設定変更: RESET後、高確率スタート。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 高確率開始の継続G数・具体的CZ当選率など朝一専用数値は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 有利区間ランプでは設定変更/据え置きを判別できないことを機種固有解析で確認。
- 設定変更・据え置き・純電断それぞれの有利区間内部契約は、高信頼な本機固有直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的6.5号機挙動から補完しない。

### resetBenefits
- 設定変更後は高確率状態からスタート。
- 天井・内部状態をリセットするため、前日ハマリを引き継がない一方、朝一高確スタートが主要な公開恩恵。
- 具体的な高確G数、朝一CZ率、AT期待度などの公開数値は確認できず推測しない。

### resetPenalties
- 設定変更により前日の天井進行を失う。
- 前日内部状態もリセットされる。
- その他の設定変更専用不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 前日G数と当日G数の合算が据え置き時の天井到達を示す場合、天井挙動は推測材料になり得るが、データ表示仕様・前兆分を考慮し単独確定条件とはしない。
- 本機固有のガックン条件/発生率は「SLOTメイドインアビス / Sメイドインアビス / S／メイドインアビス／EN / ミズホ」と「ガックン / リール始動 / 設定変更 / 据え置き / 朝一」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常CZ天井: 500G+α。
- 通常AT天井: 700G+α。
- 設定変更後: 高確率スタート（具体的G数/当選率は非公開・未固定）。
- 設定変更専用の短縮天井・モード振り分け・朝一AT期待度: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers
- 公開された朝一専用の具体的比率・期待度・固定短縮天井は確認できず。
- 定性的恩恵として「設定変更後は高確率スタート」を保存。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `SLOTメイドインアビス / メイドインアビス / Sメイドインアビス / S／メイドインアビス／EN / ミズホ / ユニバーサル` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / 高確 / ガックン / 有利区間` を組み替えて検索。
- 一撃、なな徹、スロットセブン、パチスロメソッド、イチカツ、K-Navi、P-WORLD、検定通過業界資料を横断。
- 有利区間の内部契約、ガックン、朝一高確の定量値は十分な再探索後も直接固定できず、一般論で補完しない。

## sources
取得日: 2026-09-13

### 公的/業界
- 遊技通信web / 東京都公安委員会検定通過状況（2023-03-20）: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%883%E6%9C%8820%E6%97%A5%EF%BC%89/
- P-WORLD / 遊技日本 検定通過記事: https://news.p-world.co.jp/articles/23303/nippon
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9829

### 解析/攻略
- 一撃: https://1geki.jp/slot/s_miabyss/
- 一撃 天井: https://1geki.jp/slot/s_miabyss/3/
- なな徹 機種解析: https://nana-press.com/kaiseki/machine/561/
- なな徹 朝一/有利区間: https://nana-press.com/kaiseki/machine/561/15142/
- K-Navi: https://p-kn.com/slot/3950/
- スロパチクエスト: https://www.slopachi-quest.com/article/madeinabyss-settei/
- スロットセブン: https://slot-seven.com/made_in_abyss-settei/
- パチスロメソッド: https://slotmethod.jp/archives/16805/
- イチカツ: https://ichikatsu.com/miabyss/
- パチ＆スロ必勝本 AT解説: https://p.hisshobon.jp/machine/4087/1/95521

## missingFields
- 設定変更/据え置き/純電断ごとの有利区間内部状態を直接明記する本機固有資料。
- 本機固有ガックン条件/発生率。
- 設定変更後高確の具体的継続G数、CZ/AT期待度。

## conflicts
- 現時点で物差しコア値に重大な数値CONFLICTは確認なし。
- ベースは約35.9G/50枚と約36G/50枚の丸め表記差があるが、同一値の丸め差として扱う。

coreStatus: COMPLETE_CORE
qaResetBehavior: COMPLETE_RESET_CORE_WITH_LIMITED_PUBLIC_NUMBERS
